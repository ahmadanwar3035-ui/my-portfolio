
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Redux Toolkit", level: 85 },
  { name: "HTML5", level: 98 },
  { name: "CSS3", level: 95 },
  { name: "Git & GitHub", level: 88 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#050816]"
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
          <span className="text-cyan-400 text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            Skills
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Technical
            <span className="text-cyan-400"> Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="w-full min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 sm:p-6 lg:p-7 hover:border-cyan-500/40 transition duration-300"
            >
              {/* Name + Percentage */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="font-semibold text-base sm:text-lg truncate">
                  {skill.name}
                </h3>

                <span className="text-cyan-400 text-sm sm:text-base font-medium shrink-0">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Background */}
              <div className="h-2.5 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

