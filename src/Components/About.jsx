
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-cyan-400 text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            About Me
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Turning Ideas Into
            <span className="text-cyan-400"> Reality</span>
          </h2>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl sm:rounded-[35px] p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
                Ahmad Anwar
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8">
                I am a passionate Frontend Developer focused on creating
                modern, responsive and visually engaging web applications.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 mt-5">
                My expertise includes React.js, Next.js, Tailwind CSS,
                JavaScript and modern frontend technologies.
              </p>

              <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 mt-5">
                I enjoy solving UI challenges and transforming ideas into
                beautiful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full"
          >
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 sm:p-8 rounded-3xl hover:scale-[1.02] sm:hover:scale-105 transition duration-300">
              <h3 className="text-4xl sm:text-5xl font-bold text-cyan-400">
                3+
              </h3>

              <p className="mt-3 text-gray-400 text-sm sm:text-base">
                Projects Completed
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 sm:p-8 rounded-3xl hover:scale-[1.02] sm:hover:scale-105 transition duration-300">
              <h3 className="text-4xl sm:text-5xl font-bold text-purple-400">
                10+
              </h3>

              <p className="mt-3 text-gray-400 text-sm sm:text-base">
                Technologies
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-6 sm:p-8 rounded-3xl hover:scale-[1.02] sm:hover:scale-105 transition duration-300">
              <h3 className="text-4xl sm:text-5xl font-bold text-cyan-400">
                1+
              </h3>

              <p className="mt-3 text-gray-400 text-sm sm:text-base">
                Years Experience
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 sm:p-8 rounded-3xl hover:scale-[1.02] sm:hover:scale-105 transition duration-300">
              <h3 className="text-4xl sm:text-5xl font-bold text-purple-400">
                ∞
              </h3>

              <p className="mt-3 text-gray-400 text-sm sm:text-base">
                Learning Journey
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

