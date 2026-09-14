import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Team Lead",
    role: "ZEIKH Technologies",
    feedback:
      "Ahmad is an extremely hardworking and dedicated developer. His grasp on React and responsive UI design is impressive.",
  },
  {
    name: "Project Mentor",
    role: "Senior Developer",
    feedback:
      "He quickly transforms mockups into clean, production-ready code with high attention to detail. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-[#0b0f0e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-emerald-400 text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-white">
            What People
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              {" "}
              Say
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 rounded-[30px] shadow-xl relative hover:border-emerald-500/40 transition duration-300"
            >
              <div className="text-emerald-400 text-3xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mb-6">
                "{item.feedback}"
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{item.name}</h4>
                <p className="text-emerald-300 text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
