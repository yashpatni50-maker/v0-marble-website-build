import { NextRequest, NextResponse } from 'next/server'
import { beigeProducts } from '@/lib/beige-products-data'
import { greyProducts } from '@/lib/gorgeous-grey-products-data'
import { whiteProducts } from '@/lib/wow-white-products-data'
import { boldBlackProducts } from '@/lib/bold-black-products-data'
import { exoticProducts } from '@/lib/exotic-products-data'
import { aestheticBrownProducts } from '@/lib/aesthetic-brown-products-data'
import { onyxProducts } from '@/lib/onyx-products-data'

interface RouteParams {
  collection: string
  slug: string
}

// Map collection slugs to product arrays
const collectionMap: Record<string, any[]> = {
  'beige': beigeProducts,
  'beautiful-beige': beigeProducts,
  'grey': greyProducts,
  'gorgeous-grey': greyProducts,
  'white': whiteProducts,
  'wow-white': whiteProducts,
  'black': boldBlackProducts,
  'bold-black': boldBlackProducts,
  'exotic': exoticProducts,
  'brown': aestheticBrownProducts,
  'aesthetic-brown': aestheticBrownProducts,
  'onyx': onyxProducts,
}

// Default 404 placeholder image (1x1 transparent PNG)
const DEFAULT_404_IMAGE = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
)

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<RouteParams> }
) {
  try {
    const { collection, slug } = await params

    // Normalize collection slug
    const normalizedCollection = collection.toLowerCase()
    const products = collectionMap[normalizedCollection]

    if (!products) {
      // Collection not found
      return new NextResponse(DEFAULT_404_IMAGE, {
        status: 404,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400',
        },
      })
    }

    // Remove .jpg extension if present
    const productSlug = slug.replace(/\.jpg$/i, '').toLowerCase()

    // Find product by slug
    const product = products.find((p) => p.slug.toLowerCase() === productSlug)

    if (!product) {
      // Product not found
      return new NextResponse(DEFAULT_404_IMAGE, {
        status: 404,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400',
        },
      })
    }

    // Get the warehouse/original image URL
    const imageUrl = product.originalImage || product.warehouseImage || product.image

    if (!imageUrl) {
      // No image URL found
      return new NextResponse(DEFAULT_404_IMAGE, {
        status: 404,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400',
        },
      })
    }

    // Option 1: Redirect to Vercel Blob Storage (307 Temporary Redirect)
    // This is recommended for performance and caching
    return NextResponse.redirect(imageUrl, { status: 307 })

    // Option 2: Reverse proxy (uncomment to use instead of redirect)
    // Fetches and streams the image directly
    /*
    try {
      const response = await fetch(imageUrl, {
        headers: {
          'User-Agent': 'Chandak-Marble-Image-Proxy/1.0',
        },
      })

      if (!response.ok) {
        return new NextResponse(DEFAULT_404_IMAGE, {
          status: 404,
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=86400',
          },
        })
      }

      const buffer = await response.arrayBuffer()
      const contentType = response.headers.get('content-type') || 'image/jpeg'

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000',
          'Content-Length': buffer.byteLength.toString(),
        },
      })
    } catch (error) {
      console.error('[Image Proxy] Error fetching image:', error)
      return new NextResponse(DEFAULT_404_IMAGE, {
        status: 500,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400',
        },
      })
    }
    */
  } catch (error) {
    console.error('[Image Route] Error:', error)
    return new NextResponse(DEFAULT_404_IMAGE, {
      status: 500,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  }
}

// Enable ISR (Incremental Static Regeneration) for caching
export const revalidate = 3600 // 1 hour
