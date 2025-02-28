"use client"
import Image from "next/image"
import { Star } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface ReviewCardProps {
  name: string
  date: string
  text: string
  delay?: number
}

export default function ReviewCard({ name, date, text, delay = 0 }: ReviewCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-600/30 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/10 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-zinc-300 mb-4">"{text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-zinc-500">{date}</p>
        </div>
        <div className="relative overflow-hidden rounded-full w-10 h-10 bg-zinc-800">
          <Image src="/placeholder.svg?height=40&width=40" alt={name} width={40} height={40} className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

