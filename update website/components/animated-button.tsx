"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export default function AnimatedButton({ href, children, variant = "primary" }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = "px-8 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 transform"
  const primaryClasses = "bg-red-600 hover:bg-red-700 text-white"
  const secondaryClasses = "bg-transparent hover:bg-white/10 text-white border border-white/30"

  const classes = `${baseClasses} ${variant === "primary" ? primaryClasses : secondaryClasses} ${isHovered ? "translate-x-1" : ""}`

  return (
    <Link
      href={href}
      className={classes}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {variant === "primary" && (
        <ChevronRight
          className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
        />
      )}
    </Link>
  )
}

