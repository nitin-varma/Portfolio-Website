import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  githubLink?: string
}

export default function ProjectCard({ title, description, technologies, image, githubLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-secondary/50 border-secondary hover:border-primary/50 transition-colors">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-background/50 text-foreground/80 border-primary/20">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="outline" className="bg-background/50 border-primary/20">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base line-clamp-4 text-foreground/70">{description}</CardDescription>
      </CardContent>
      {githubLink && (
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
          >
            <Link href={githubLink} target="_blank">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
