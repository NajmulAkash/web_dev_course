import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    link: "#",
  },
  {
    title: "E-commerce App",
    description: "Shopping app with cart and product listing features.",
    tech: ["React", "API", "Tailwind"],
    link: "#",
  },
  {
    title: "Todo App",
    description: "Simple todo app with add & delete functionality.",
    tech: ["React", "Tailwind"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-indigo-600 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-block mt-2 text-indigo-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
