import { motion } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      icon: <SiReact />,
      level: "Advanced",
      percentage: 90,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: "Intermediate",
      percentage: 80,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: "Advanced",
      percentage: 88,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />,
      level: "Advanced",
      percentage: 95,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "Advanced",
      percentage: 92,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: "Advanced",
      percentage: 90,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />,
      level: "Intermediate",
      percentage: 78,
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      level: "Intermediate",
      percentage: 75,
    },
    {
      name: "Git",
      icon: <SiGit />,
      level: "Intermediate",
      percentage: 80,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      level: "Intermediate",
      percentage: 82,
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      level: "Intermediate",
      percentage: 72,
    },
  ];

  const categories = [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Styling",
      items: [
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "UI Implementation",
      ],
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "Figma", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Skills &
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and tools I use to design, develop and deliver modern
            web experiences.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400 transition-all duration-300 group-hover:bg-purple-500/20">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-gray-600">
                      {skill.level}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-purple-400">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-purple-500/20 hover:bg-purple-500/[0.03]"
            >
              <h3 className="text-lg font-bold text-white">{category.title}</h3>

              <div className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-500"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 rounded-2xl border border-purple-500/10 bg-purple-500/[0.03] p-6 text-center"
        >
          <p className="text-sm leading-7 text-gray-500">
            I continuously learn new technologies and improve my development
            workflow to build better digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
