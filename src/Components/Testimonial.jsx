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
    <section
      id="testimonials"
      className="relative bg-[#F6F7FC] px-6 py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#2748E0]" />
            <span className="text-sm text-[#4B5070]">Testimonials</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            What people say
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] p-9"
            >
              <FaQuoteLeft className="text-2xl text-[#2748E0]/40" />

              <p className="mt-6 leading-8 text-[#4B5070]">{item.feedback}</p>

              <div className="mt-7 border-t border-[#DDE1F0] pt-5">
                <h3 className="font-display text-base font-medium text-[#14162B]">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-[#2748E0]">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
