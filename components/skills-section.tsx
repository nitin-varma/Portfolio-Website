import { Card, CardContent } from "@/components/ui/card"
import { Database, Code, BarChart, Brain, Cloud, MessageSquare } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "R", "FastAPI", "Streamlit", "Docker", "SQL", "Shell Scripting", "Git"],
    },
    {
      title: "ETL & BI",
      icon: <BarChart className="h-6 w-6" />,
      skills: ["Airflow", "ERStudio", "Alteryx", "Talend", "Azure Data Factory", "Tableau", "PowerBI"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL Server", "PostgreSQL", "MySQL", "OracleDB", "Vector Databases"],
    },
    {
      title: "Cloud & Big Data",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Azure Data Factory", "AWS Redshift", "Snowflake", "AWS S3"],
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NLTK", "Matplotlib", "Seaborn"],
    },
    {
      title: "Generative AI",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["BERT", "Llama", "LangChain", "GPT-2", "AI Agents", "NVIDIA Multi-modal RAG", "Knowledge Graphs"],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Specialized expertise in machine learning, data science, and AI technologies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-secondary/50 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-background text-foreground/80 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

