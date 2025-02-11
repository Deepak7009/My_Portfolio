"use client"; // Add this directive to ensure it's treated as a client-side component

import { useInView } from "react-intersection-observer";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "GraphQL", level: 70 },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-background p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: inView ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
              <p className="text-sm mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-tr-full"></div>
    </section>
  );
};

export default Skills;
