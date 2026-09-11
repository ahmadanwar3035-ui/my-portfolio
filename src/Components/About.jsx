import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#050816] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            About Me
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Turning Ideas Into
            <span className="text-cyan-400"> Reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-10">
              <h3 className="text-3xl font-bold mb-6">Ahmad Anwar</h3>

              <p className="text-gray-400 leading-8">
                I am a passionate Frontend Developer focused on creating modern,
                responsive and visually engaging web applications.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                My expertise includes React.js, Next.js, Tailwind CSS,
                JavaScript and modern frontend technologies.
              </p>

              <p className="text-gray-400 leading-8 mt-5">
                I enjoy solving UI challenges and transforming ideas into
                beautiful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-8 rounded-3xl hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-cyan-400">3+</h3>
              <p className="mt-3 text-gray-400">Projects Completed</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-8 rounded-3xl hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-purple-400">10+</h3>
              <p className="mt-3 text-gray-400">Technologies</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-8 rounded-3xl hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-cyan-400">1+</h3>
              <p className="mt-3 text-gray-400">Years Experience</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-8 rounded-3xl hover:scale-105 transition">
              <h3 className="text-5xl font-bold text-purple-400">∞</h3>
              <p className="mt-3 text-gray-400">Learning Journey</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
