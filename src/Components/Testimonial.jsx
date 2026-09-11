
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Team Member",
    role: "Frontend Developer",
    text: "Ahmad consistently delivers clean, responsive and modern interfaces with great attention to detail.",
  },
  {
    name: "Project Reviewer",
    role: "UI Reviewer",
    text: "Excellent understanding of frontend development and strong problem-solving skills.",
  },
  {
    name: "Client Feedback",
    role: "Project Client",
    text: "Professional communication, quality work and outstanding user interface implementation.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#040816]"
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
            Testimonials
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            What People
            <span className="text-cyan-400"> Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="w-full min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 lg:p-8 hover:border-cyan-500/40 transition duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-cyan-400 text-2xl sm:text-3xl mb-5 sm:mb-6" />

              {/* Testimonial */}
              <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8">
                "{item.text}"
              </p>

              {/* Person */}
              <div className="mt-6 sm:mt-8">
                <h4 className="font-bold text-lg sm:text-xl">
                  {item.name}
                </h4>

                <p className="text-cyan-400 text-xs sm:text-sm mt-1">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

