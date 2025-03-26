import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Academic foundation in computer science and specialized training in data science
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-secondary/50 border-secondary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-background/40 rounded-md flex items-center justify-center overflow-hidden">
                    {/* Replace with actual Northeastern University logo */}
                    <div className="text-xs text-center text-muted-foreground p-1">Add Northeastern logo</div>
                    {/* Once you have the logo, uncomment this:
                    <Image 
                      src="/northeastern-logo.png" 
                      alt="Northeastern University" 
                      width={64} 
                      height={64} 
                      className="object-contain" 
                    />
                    */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Northeastern University</h3>
                    <p className="text-base text-foreground/80 mt-1">Boston, Massachusetts</p>
                    <p className="text-sm font-medium text-muted-foreground mt-2">
                      Master of Science in Computer Software Engineering
                    </p>
                  </div>
                </div>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 whitespace-nowrap">May 2025</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                <span className="text-primary font-medium">Relevant Concepts:</span> Data Science, Data Analytics, Data
                Engineering, Data Warehousing, Data Architecture, Business Intelligence, ETL, Data Modeling, Generative
                AI, Large Language Models
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-secondary">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-background/40 rounded-md flex items-center justify-center overflow-hidden">
                    {/* Replace with actual JNTU logo */}
                    <div className="text-xs text-center text-muted-foreground p-1">Add JNTU logo</div>
                    {/* Once you have the logo, uncomment this:
                    <Image 
                      src="/jntu-logo.png" 
                      alt="Jawaharlal Nehru Technological University" 
                      width={64} 
                      height={64} 
                      className="object-contain" 
                    />
                    */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Jawaharlal Nehru Technological University</h3>
                    <p className="text-base text-foreground/80 mt-1">Hyderabad, India</p>
                    <p className="text-sm font-medium text-muted-foreground mt-2">
                      Bachelor of Technology in Computer Science and Engineering
                    </p>
                  </div>
                </div>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 whitespace-nowrap">May 2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                <span className="text-primary font-medium">Relevant Concepts:</span> Data Mining, Data Analytics, Image
                and Video Processing, Machine Learning, Big Data Analytics
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

