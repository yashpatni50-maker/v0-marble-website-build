"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayStart?: number
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  delayStart = 0,
}: StaggerChildrenProps) {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
