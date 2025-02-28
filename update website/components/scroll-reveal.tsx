"use client"

import type React from "react"
import { useInView } from "react-intersection-observer"

interface ScrollRevealProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
}

export default function ScrollReveal({ children, threshold = 0.1, delay = 0 }: ScrollRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

