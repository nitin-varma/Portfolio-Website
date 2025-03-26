"use client"

import { useState } from "react"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  // Initial projects (always visible)
  const initialProjects = [
    {
      title: "Research Assistant Platform",
      description:
        "Developed an automated data ingestion and management system using Airflow, AWS S3, and Snowflake, reducing data processing times by 60%. Integrated advanced analytical features including multi-modal querying and real-time summaries.",
      technologies: ["Airflow", "FastAPI", "Streamlit", "Snowflake", "AWS S3", "Docker", "NVIDIA Multi-Modal RAG"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Graph RAG with Knowledge Graphs",
      description:
        "Developed a Graph RAG model that retrieves contextual data from research papers and technical documents. Combined knowledge graphs and vector databases to enhance retrieval, resulting in a 20% improvement in answer relevance and accuracy.",
      technologies: ["RAG", "Python", "Knowledge Graphs", "Vector Databases"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Meteorological Forecasting",
      description:
        "Developed a multi-class precipitation prediction framework integrating meteorological time-series data and GOES satellite imagery, achieving a classification accuracy of 85%. Implemented hybrid models combining ConvLSTM2D and LSTM architectures.",
      technologies: ["Python", "Deep Learning", "RNN", "ConvLSTM", "Satellite Imagery"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Brain Tumor Segmentation",
      description:
        "Developed a custom U-Net model for segmenting brain tumor sub-regions in MRI scans, achieving a 37% improvement in Dice Score. Implemented 5-fold cross-validation with lazy loading for efficient training on large 3D/4D MRI volumes.",
      technologies: ["Python", "Deep Learning", "U-Net", "Medical Imaging"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
  ]

  // Additional projects (shown when "View More" is clicked)
  const additionalProjects = [
    {
      title: "Chatbot with Tamil Language Embeddings",
      description:
        "Trained custom Word2Vec, RNN, and DNN models on Ponniyin Selvan Tamil text, improving chatbot accuracy by 20% and semantic similarity by 15%. Developed RNN-based embeddings, outperforming Keras defaults.",
      technologies: ["Word2Vec", "RNN", "Deep Learning", "Natural Language Processing"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Credit Scoring with Reinforcement Learning",
      description:
        "Developed a Q-learning algorithm with Stochastic Gradient Descent for value function approximation to optimize credit score acceptance thresholds, increasing lender profits by 15% and resulting in a 10% higher return on investment.",
      technologies: ["Q-learning", "Python", "RBFs", "SGD", "Reinforcement Learning"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Motor Vehicle Collision Analytics",
      description:
        "Spearheaded a team to develop a data engineering and analytics solution for motor vehicle collisions in New York, Chicago, and Austin using Talend. Implemented dimensional models and handled large datasets in MySQL.",
      technologies: ["ydata-profiling", "Talend", "SQL", "MySQL", "Tableau", "PowerBI"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Food Inspection Data Engineering",
      description:
        "Enhanced data quality and insights on Chicago and Dallas food inspections by cleansing 100,000+ records and using Talend for efficient ETL. Optimized data integration into MySQL warehouses, reducing data processing time by 40%.",
      technologies: ["ydata-profiling", "ER Studio", "Talend", "SQL", "MySQL", "Tableau", "PowerBI"],
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      githubLink: "#",
    },
  ]

  // Combine projects based on state
  const displayedProjects = showAllProjects ? [...initialProjects, ...additionalProjects] : initialProjects

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my data science and machine learning projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            variant="outline"
            size="lg"
            className="group border-primary text-primary hover:bg-primary/10 hover:text-primary"
          >
            {showAllProjects ? (
              <>
                View Less <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                View More <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}

