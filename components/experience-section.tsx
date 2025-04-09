import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Professional Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building expertise in quantitative research and machine learning applications
        </p>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-secondary/50 border-secondary">
            <CardHeader>
              <div className="flex justify-between items-start flex-col md:flex-row gap-2">
                <div>
                  <CardTitle>Quantitative Research Intern</CardTitle>
                  <CardDescription>AlgoTrade, Hyderabad, India</CardDescription>
                </div>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">March 2023 – July 2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced team collaboration using Jira workflow management tools to manage SDLC</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Developed and executed classifier and regression models using LSTM Neural Networks and ARIMA to
                    predict stock price direction and quantify movements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Automated data collection and processing tasks using Python and R, increasing research productivity
                    by 25%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Executed market orders based on model outputs, driving data-driven trading decisions, achieving a
                    profit margin of 15-30%
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Backtested trading algorithms with historical market data, achieving an average annualized return of
                    12%
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
