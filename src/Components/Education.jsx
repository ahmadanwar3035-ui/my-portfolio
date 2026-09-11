
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#040816]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-cyan-400 text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            Education
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Academic
            <span className="text-cyan-400"> Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[11px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-500" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-10 sm:pl-16"
          >

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/20" />

            {/* Education Card */}
            <div className="w-full min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl sm:rounded-[30px] p-5 sm:p-7 lg:p-8 hover:border-cyan-500/40 transition duration-300">

              <span className="text-cyan-400 text-sm sm:text-base font-medium">
                2026 - Present
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold mt-3 leading-tight">
                BS Computer Science
              </h3>

              <h4 className="text-purple-400 text-lg sm:text-xl mt-2">
                Virtual University of Pakistan
              </h4>

              <p className="text-gray-400 text-sm sm:text-base mt-5 sm:mt-6 leading-7 sm:leading-8">
                Currently pursuing BSCS with a focus on software engineering,
                web development, data structures, programming fundamentals and
                modern frontend technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

