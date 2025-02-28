"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-md"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col animate-fade-in">
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="text-white p-2 hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 rounded-md"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            {["about", "founder", "services", "reviews", "contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item}`}
                className="hover:text-red-600 transition-colors relative overflow-hidden group"
                onClick={closeMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

