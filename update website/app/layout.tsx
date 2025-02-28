import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Southern Experience - High Performance Automobile Brand",
  description:
    "Southern Experience is a high performance automobile brand driven by passion for speed. We offer the best products and services for your vehicle.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'