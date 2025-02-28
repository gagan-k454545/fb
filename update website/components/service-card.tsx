"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

interface ServiceCardProps {
  title: string
  image: string
  description: string
  delay?: number
}

export default function ServiceCard({ title, image, description, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg h-64 cursor-pointer transform transition-all duration-500 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
        <div
          className={`w-10 h-1 bg-red-600 transform transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        ></div>
        <p
          className={`text-sm text-zinc-300 mt-2 transition-all duration-300 ${isHovered ? "opacity-100 max-h-20" : "opacity-0 max-h-0"} overflow-hidden`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

