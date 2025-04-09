import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText } from "lucide-react"
import Link from "next/link"

interface ArticleCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  url: string
  date: string
  publisher?: string
  type?: "article" | "research"
}

export default function ArticleCard({
  title,
  description,
  tags,
  image,
  url,
  date,
  publisher,
  type = "article",
}: ArticleCardProps) {
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
        <div className="flex justify-between items-start">
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 whitespace-nowrap">{date}</Badge>
        </div>
        {publisher && (
          <div className="mt-2">
            <Badge variant="outline" className="bg-background/50 text-foreground/80 border-primary/20">
              {publisher}
            </Badge>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-background/50 text-foreground/80 border-primary/20">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="bg-background/50 border-primary/20">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base line-clamp-4 text-foreground/70">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
        >
          <Link href={url} target="_blank">
            {type === "article" ? (
              <>
                <BookOpen className="mr-2 h-4 w-4" /> Read Article
              </>
            ) : (
              <>
                <FileText className="mr-2 h-4 w-4" /> View Research Paper
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
