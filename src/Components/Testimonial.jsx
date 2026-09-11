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
    <section id="testimonials" className="py-32 bg-[#040816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            Testimonials
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            What People
            <span className="text-cyan-400"> Say</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8"
            >
              <FaQuoteLeft className="text-cyan-400 text-3xl mb-6" />

              <p className="text-gray-400 leading-8">"{item.text}"</p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">{item.name}</h4>

                <p className="text-cyan-400 text-sm mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
