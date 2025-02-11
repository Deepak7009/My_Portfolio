import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality.",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that provides real-time weather information using a third-party API.",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.link}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-tr-full"></div>
    </section>
  )
}

export default Projects

