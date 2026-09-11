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
    <section id="skills" className="py-32 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            Skills
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Technical
            <span className="text-cyan-400"> Expertise</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 hover:border-cyan-500/40 transition"
            >
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>

                <span className="text-cyan-400">{skill.level}%</span>
              </div>

              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
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
