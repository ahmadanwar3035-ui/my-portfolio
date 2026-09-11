
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#050816]"
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
            Career
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Work
            <span className="text-cyan-400"> Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[11px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-purple-500" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pl-10 sm:pl-16"
          >

            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/20" />

            {/* Experience Card */}
            <div className="w-full min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl sm:rounded-[30px] p-5 sm:p-7 lg:p-8 hover:border-cyan-500/40 transition duration-300">

              <span className="text-cyan-400 text-sm sm:text-base font-medium">
                Aug 2025 – Present
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold mt-3 leading-tight">
                Frontend Developer Intern
              </h3>

              <h4 className="text-purple-400 text-lg sm:text-xl mt-2">
                ZEIKH Technologies
              </h4>

              <ul className="mt-6 space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base leading-7">
                <li>✓ Developed responsive React.js applications.</li>

                <li>✓ Created reusable and scalable UI components.</li>

                <li>✓ Integrated Redux Toolkit state management.</li>

                <li>
                  ✓ Converted Figma designs into production-ready interfaces.
                </li>

                <li>✓ Improved application performance and UX.</li>

                <li>✓ Collaborated with team using Git & GitHub.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

