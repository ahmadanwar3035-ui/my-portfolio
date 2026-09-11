import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-32 bg-[#040816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            Education
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Academic
            <span className="text-cyan-400"> Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-20"
          >
            <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 hover:border-cyan-500/40 transition">
              <span className="text-cyan-400 font-medium">2026 - Present</span>

              <h3 className="text-3xl font-bold mt-3">BS Computer Science</h3>

              <h4 className="text-purple-400 text-xl mt-2">
                Virtual University of Pakistan
              </h4>

              <p className="text-gray-400 mt-6 leading-8">
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
