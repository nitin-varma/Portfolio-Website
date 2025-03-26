import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nitin Sai Varma Indukuri - Data Scientist & ML Engineer",
  description:
    "Portfolio of Nitin Sai Varma Indukuri, specializing in Data Science, Machine Learning, and Generative AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'