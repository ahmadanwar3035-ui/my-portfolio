
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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#050816] to-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Featured Projects
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-2xl mx-auto">
            Some projects I've recently worked on
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition duration-500" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 sm:h-60 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4 leading-7">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs sm:text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-5 sm:mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition text-sm sm:text-base"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 transition text-sm sm:text-base"
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

