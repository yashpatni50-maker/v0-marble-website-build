"use client"

import { useEffect, useRef } from "react"

export function LuxuryCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top  = `${mouseY}px`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top  = `${ringY}px`
      rafId = requestAnimationFrame(animate)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        ring.classList.add("hovering")
      } else {
        ring.classList.remove("hovering")
      }
    }

    rafId = requestAnimationFrame(animate)
    document.addEventListener("mousemove", onMouseMove, { passive: true })
    document.addEventListener("mouseover", onMouseOver, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
