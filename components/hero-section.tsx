import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
        Hello, I'm <span className="text-primary">Nitin</span>.
      </h1>
      <h2 className="text-2xl md:text-4xl font-medium text-foreground/80 mb-12">I'm a Data Scientist & ML Engineer.</h2>
      <Button asChild size="lg" className="group border-primary bg-transparent hover:bg-primary/10 text-primary">
        <Link href="#projects" className="flex items-center gap-2">
          View my work
          <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
        </Link>
      </Button>
    </section>
  )
}

