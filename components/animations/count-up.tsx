"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const count = useMotionValue(from)
  const displayCount = useTransform(count, (v) => {
    return Math.floor(v).toString()
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const start = Date.now()

      const animate = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / (duration * 1000), 1)
        count.set(from + (to - from) * progress)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isVisible, from, to, duration, delay, count])

  return (
    <motion.div ref={ref} className={className}>
      {prefix}
      <motion.span>{displayCount}</motion.span>
      {suffix}
    </motion.div>
  )
}
