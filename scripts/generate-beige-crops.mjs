import sharp from "sharp"
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

// Each product: slug + source slab photo URL.
// Product name is derived from the uploaded filename (without extension).
const products = [
  { slug: "avorio-cream", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avorio%20Cream-JBrecBa7pInAUeJtlncMcCKkrqQMNi.jpeg" },
  { slug: "oracle-cream", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oracle%20cream-zrtYFlnV55ItS7bv2quATmbIvoRTcn.jpeg" },
  { slug: "brescia-aurora", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brescia%20Aurora-Na6O7RRHJGyG5KGyEEjkrC5WOYHYgM.jpeg" },
  { slug: "crema-senia", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crema%20Senia-7JynkNqiKVHsxsdFHNliIBsUwvKREt.jpeg" },
  { slug: "dyna-royale", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dyna%20Royale-oUSUHM7dMusLyHDf6ENnfoss1ZYCQ0.jpeg" },
  { slug: "de-martino-chips", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/De-Martino%20Chips-zb1iP4tEc5sHPqH8IfIsBI3o5QWfCL.jpeg" },
  { slug: "gold-brescia", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gold%20Brescia-oO26jdSGNiweAuLw2ZG6fKQp2SMmFF.jpeg" },
  { slug: "silver-river", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Silver%20River-zJ46DCuFwJzjOWrzyhILYpknGdkp7P.jpeg" },
  { slug: "exposed-concrete", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exposed%20Concrete-nyqIZafdRPIVal9A1bgzI0fvTR1RyF.jpeg" },
  { slug: "azul-brescia", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Azul%20Brescia-N5lUzwIh7lddgkKxezqnqmdwfeDUSZ.jpeg" },
  { slug: "orange-brescia", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Brescia-vD6RMGLUa1SC20zJDbUCBnRzEoPcCe.jpeg" },
  { slug: "crema-marfil", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Crema%20Marfil-W5oqbzLW4hsb8nBJr7SqKvyGcz26sL.jpeg" },
  { slug: "superior-beige", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Superior%20Beige-SZsyeLjbx9nMDcHUsnH8KpBwAtosqq.jpeg" },
  { slug: "ottoman-beige", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ottoman%20Beige-JQV1vTPfk5vVBwmyi7CKp5IFs323GP.jpeg" },
  { slug: "vanilla-mocha", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vanilla%20Mocha-hMRX0A3tqYrshcwGblXiNmFVhtLNeq.jpeg" },
  { slug: "vanilla-spider", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vanilla%20Spider-J1ar9BQd9UOGrU7gVlxokeMeqws2Ej.jpeg" },
]

const baseDir = path.join(process.cwd(), "public", "images", "beige")
const dirs = {
  original: path.join(baseDir, "original"),
  square: path.join(baseDir, "square"),
  landscape: path.join(baseDir, "landscape"),
}

// Center-crop a region of the source, biased slightly upward where the
// standing slab dominates, then resize to the target texture size.
async function centerCrop(input, aspect, { widthFraction, targetW, targetH, vBias = 0.5 }) {
  const img = sharp(input)
  const meta = await img.metadata()
  const W = meta.width
  const H = meta.height

  let cropW = Math.round(W * widthFraction)
  let cropH = Math.round(cropW / aspect)

  // If that height doesn't fit, clamp by height instead.
  if (cropH > H * 0.9) {
    cropH = Math.round(H * 0.9)
    cropW = Math.round(cropH * aspect)
  }
  if (cropW > W) {
    cropW = W
    cropH = Math.round(cropW / aspect)
  }

  const left = Math.round((W - cropW) / 2)
  // Bias the vertical center into the slab body to avoid the warehouse
  // background above the standing slab.
  let top = Math.round(H * vBias - cropH / 2)
  top = Math.max(0, Math.min(top, H - cropH))

  return sharp(input)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(targetW, targetH, { fit: "cover" })
    .jpeg({ quality: 88 })
    .toBuffer()
}

async function main() {
  await Promise.all(Object.values(dirs).map((d) => mkdir(d, { recursive: true })))

  for (const p of products) {
    const res = await fetch(p.url)
    if (!res.ok) throw new Error(`Failed to fetch ${p.slug}: ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())

    // Original full slab (normalized to jpeg, capped width for web)
    const original = await sharp(buf)
      .resize(1600, null, { withoutEnlargement: true })
      .jpeg({ quality: 90 })
      .toBuffer()
    await writeFile(path.join(dirs.original, `${p.slug}.jpg`), original)

    // 1:1 square texture crop for collection cards (tight zoom, biased into slab body)
    const square = await centerCrop(buf, 1, { widthFraction: 0.42, targetW: 800, targetH: 800, vBias: 0.56 })
    await writeFile(path.join(dirs.square, `${p.slug}.jpg`), square)

    // 3:2 landscape texture crop for product page hero
    const landscape = await centerCrop(buf, 1.5, { widthFraction: 0.62, targetW: 1200, targetH: 800, vBias: 0.52 })
    await writeFile(path.join(dirs.landscape, `${p.slug}.jpg`), landscape)

    console.log(`[v0] processed ${p.slug}`)
  }
  console.log(`[v0] done: ${products.length} products`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
