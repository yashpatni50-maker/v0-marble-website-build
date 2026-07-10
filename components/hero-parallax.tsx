'use client'

import { useEffect, useState } from 'react'

export function HeroParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="absolute inset-0 z-0"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    />
  )
}
