import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Team Lead",
    role: "ZEIKH Technologies",
    feedback:
      "Ahmad consistently delivers clean, responsive and high-quality frontend solutions. His React.js skills and attention to detail make him a valuable team member.",
  },
  {
    name: "Project Mentor",
    role: "Senior Frontend Developer",
    feedback:
      "He has a strong understanding of modern frontend development and always focuses on writing maintainable, scalable and user-friendly code.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#EFE6D7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-[#C6A972] uppercase tracking-[0.3em] font-semibold text-sm">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 text-[#2F2A24]">
            What People
            <span className="block text-[#C6A972]">Say</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[35px] p-10 border border-[#E7DCCB] shadow-lg"
            >
              <div className="text-[#C6A972] text-4xl mb-6">
                <FaQuoteLeft />
              </div>

              <p className="text-[#6B6256] leading-8 mb-8 italic">
                "{item.feedback}"
              </p>

              <div>
                <h3 className="text-xl font-bold text-[#2F2A24]">
                  {item.name}
                </h3>

                <p className="text-[#C6A972] font-medium mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
