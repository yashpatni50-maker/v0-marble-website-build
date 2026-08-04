"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverLift?: number
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverLift = 8,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -hoverLift, transition: { duration: 0.3 } }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
