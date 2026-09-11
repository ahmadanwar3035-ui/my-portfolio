import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            Career
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Work
            <span className="text-cyan-400"> Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-20"
          >
            {/* Dot */}
            <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 hover:border-cyan-500/40 transition">
              <span className="text-cyan-400 font-medium">
                Aug 2025 – Present
              </span>

              <h3 className="text-3xl font-bold mt-3">
                Frontend Developer Intern
              </h3>

              <h4 className="text-purple-400 text-xl mt-2">
                ZEIKH Technologies
              </h4>

              <ul className="mt-6 space-y-4 text-gray-400">
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
