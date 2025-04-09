import ArticleCard from "./article-card"

export default function ArticlesSection() {
  const articles = [
    {
      title: "Flipped Interaction Pattern: A New Paradigm for Engaging User Experiences",
      description:
        "Explore the innovative Flipped Interaction Pattern that transforms traditional user interfaces by prioritizing content and minimizing cognitive load. Learn how this approach enhances user engagement through progressive disclosure, contextual interactions, and adaptive interfaces.",
      tags: ["UX Design", "UI Patterns", "User Experience", "Interaction Design"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1_4LHZTXCu-uslrnJ0UqDCUA-RBkngazlPxedCJIrIByKs0a1eE577s.webp",
      url: "https://medium.com/@nitinvarma9515/flipped-interaction-pattern-a-new-paradigm-for-engaging-user-experiences-52df9f727207",
      date: "Jan 2024",
      type: "article",
    },
    {
      title: "Blockchain-based Voting System in a Democratic Environment",
      description:
        "Research on utilizing blockchain technology to create a secure electronic voting system that eliminates fraud, ensures vote integrity, and increases accessibility. This paper explores how distributed ledger technology can address key challenges in traditional voting systems.",
      tags: ["Blockchain", "Voting Systems", "Security", "Research Paper"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1600X900-How-does-blockchain-work.jpg-VuxRJ56VbIyWTD3sahYBdycaQ2wLHZ.jpeg",
      url: "https://ieeexplore.ieee.org/document/10250609",
      date: "Aug 2023",
      publisher: "IEEE",
      type: "research",
    },
  ]

  return (
    <section id="articles" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">Articles & Publications</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thoughts and insights on data science, machine learning, and technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
