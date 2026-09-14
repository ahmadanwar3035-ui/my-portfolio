import { motion } from "framer-motion";
import {
  HiOutlineExternalLink,
  HiOutlineCode,
  HiOutlineArrowRight,
} from "react-icons/hi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

import projectImageSplat from "../images/splat2.png";
import projectImageHekhto from "../images/herkto.png";
import projectImageDaily from "../images/todo.png";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "SPLAT",
      category: "Gaming Platform",
      description:
        "A modern gaming platform interface focused on engaging user experience, clean UI and responsive design. Includes game categories, authentication flow and leaderboard concepts.",
      image: projectImageSplat,
      technologies: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
      link: "#",
      github: "#",
    },
    {
      number: "02",
      title: "Hekto",
      category: "E-Commerce",
      description:
        "A responsive e-commerce website with a clean product-focused interface designed to provide a smooth shopping experience across different screen sizes.",
      image: projectImageHekhto,
      technologies: [
        { name: "React.js", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
      link: "#",
      github: "#",
    },
    {
      number: "03",
      title: "Daily Progress",
      category: "Task Management",
      description:
        "A productivity-focused task management interface designed to help users organize daily tasks, track progress and maintain a simple workflow.",
      image: projectImageDaily,
      technologies: [
        { name: "React.js", icon: <SiReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
      ],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Featured
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A collection of projects where I've applied modern frontend
            technologies to create responsive and engaging digital experiences.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Projects */}
        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-purple-500/30 hover:bg-purple-500/[0.02]"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-purple-950/30 to-black">
                  {/* Number */}
                  <span className="absolute left-6 top-5 z-10 text-6xl font-black text-white/5">
                    {project.number}
                  </span>

                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-[#07070d]/30 to-transparent" />

                  {/* Category */}
                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      Project {project.number}
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology.name}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
                      >
                        <span className="text-purple-400">
                          {technology.icon}
                        </span>

                        {technology.name}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      // href={project.link}
                      className="group/link flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/20"
                    >
                      Live Preview
                      <HiOutlineExternalLink className="transition-transform group-hover/link:translate-x-1" />
                    </a>

                    <a
                      // href={project.github}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                    >
                      <HiOutlineCode />
                      Source Code
                    </a>
                  </div>

                  {/* Arrow */}
                  <div className="mt-8 flex items-center gap-2 text-xs text-gray-600 transition-colors duration-300 group-hover:text-purple-400">
                    <span>Explore project</span>

                    <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-600">
            More projects and experiments coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
