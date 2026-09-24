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
    { name: "React.js", icon: <SiReact />, level: "Advanced", percentage: 90 },
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
    { name: "HTML5", icon: <SiHtml5 />, level: "Advanced", percentage: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced", percentage: 92 },
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
    { name: "Git", icon: <SiGit />, level: "Intermediate", percentage: 80 },
    {
      name: "GitHub",
      icon: <SiGithub />,
      level: "Intermediate",
      percentage: 82,
    },
    { name: "Figma", icon: <SiFigma />, level: "Intermediate", percentage: 72 },
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
    { title: "Tools & Workflow", items: ["Git", "GitHub", "Figma", "VS Code"] },
  ];

  return (
    <section
      id="skills"
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
            <span className="text-sm text-[#4B5070]">My expertise</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Skills & technologies
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#4B5070]">
            Technologies and tools I use to design, develop and deliver modern
            web experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-2xl border border-[#DDE1F0] bg-[#FFFFFF] p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5BFF]/10 text-lg text-[#2F5BFF]">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#14162B]">
                      {skill.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-[#6E7391]">
                      {skill.level}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#2748E0]">
                  {skill.percentage}%
                </span>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#DDE1F0]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-[#2748E0]"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] p-7"
            >
              <h3 className="font-display text-lg font-medium text-[#14162B]">
                {category.title}
              </h3>

              <div className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#4B5070]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2748E0]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
