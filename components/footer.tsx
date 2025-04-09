import Link from "next/link"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nitin Sai Varma Indukuri. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/nitin-varma"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nitin-varma-indukuri/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://medium.com/@nitinvarma9515"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Medium"
            >
              <BookOpen className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:nitinvarma9515@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
