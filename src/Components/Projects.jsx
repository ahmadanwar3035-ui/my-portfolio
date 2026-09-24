import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";
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
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#F6F7FC] px-6 py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#2748E0]" />
            <span className="text-sm text-[#4B5070]">Selected work</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Featured projects
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#4B5070]">
            A collection of projects where I've applied modern frontend
            technologies to create responsive and engaging digital experiences.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF]"
            >
              <div className="flex h-full flex-col">
                {/* Image */}
                <div className="relative h-56 shrink-0 overflow-hidden bg-[#F6F7FC]">
                  <span className="absolute left-6 top-5 z-10 font-display text-6xl font-semibold text-[#14162B]/10">
                    {project.number}
                  </span>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-[#DDE1F0] bg-[#FFFFFF]/90 px-4 py-2 text-xs font-medium text-[#14162B] backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold text-[#14162B]">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#4B5070] sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology.name}
                        className="flex items-center gap-2 rounded-full border border-[#DDE1F0] px-3 py-2 text-xs text-[#4B5070]"
                      >
                        <span className="text-[#2748E0]">
                          {technology.icon}
                        </span>
                        {technology.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <a className="flex items-center gap-2 rounded-full border border-[#DDE1F0] bg-[#ffff] px-5 py-3 text-sm font-medium text-[#F6F7FC] transition-colors duration-300    hover:border-[#2748E0]/50  ">
                      Live preview
                      <HiOutlineExternalLink />
                    </a>

                    <a className="flex items-center gap-2 rounded-full border border-[#DDE1F0] px-5 py-3 text-sm font-medium text-[#14162B] transition-colors duration-300 hover:border-[#2748E0]/50  ">
                      <HiOutlineCode />
                      Source code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[#6E7391]">
            More projects and experiments coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
