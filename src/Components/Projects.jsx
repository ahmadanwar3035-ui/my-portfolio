import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import splatProject from "../images/splat2.png";
import hektoProject from "../images/herkto.png";
import todoProject from "../images/todo.png";

const projects = [
  {
    title: "SPLAT",
    desc: "Modern gaming platform UI built with React.js, Next.js and Tailwind CSS featuring responsive layouts and immersive user experience.",
    image: splatProject,
    tech: ["React", "Next.js", "Tailwind"],
    github: "#",
    live: "#",
  },

  {
    title: "HEKTO",
    desc: "E-commerce platform with modern design system, responsive layouts and reusable frontend architecture.",
    image: hektoProject,
    tech: ["React", "JavaScript", "Tailwind"],
    github: "#",
    live: "#",
  },

  {
    title: "Daily Progress",
    desc: "Productivity application for tracking tasks, goals and daily performance with intuitive UI.",
    image: todoProject,
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-[#050816] to-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-5xl font-bold text-center">Featured Projects</h2>

          <p className="text-center text-gray-400 mt-4 mb-16">
            Some projects I've recently worked on
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
              }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500"></div>

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-4 leading-7">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:border-cyan-400 transition"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
