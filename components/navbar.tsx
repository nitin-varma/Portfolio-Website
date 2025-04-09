"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Nitin<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#skills" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#education"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#articles"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Articles
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#articles"
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
