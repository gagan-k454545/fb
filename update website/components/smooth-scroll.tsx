"use client"

import type React from "react"

import { useEffect } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.hash && target.hash.startsWith("#")) {
        e.preventDefault()
        const id = target.hash.slice(1)
        const element = document.getElementById(id)
        if (element) {
          const yOffset = -80 // Adjust this value based on your header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return <>{children}</>
}

