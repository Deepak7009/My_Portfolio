import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/3">
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Profile"
                width={192}
                height={192}
                className="rounded-full shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary"></div>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              I'm a passionate web developer with experience in creating responsive and user-friendly websites. My
              expertise includes React, Next.js, and modern CSS frameworks like Tailwind.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good book on software design patterns.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full"></div>
    </section>
  )
}

export default About

