
import { FaCode, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    desc: "Modern React.js and Next.js applications with clean architecture.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Applications",
    desc: "Scalable and performance-focused web solutions.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Pixel-perfect experiences across all devices.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Implementation",
    desc: "Beautiful interfaces with engaging user experiences.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
          <span className="text-cyan-400 text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            Services
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            What I
            <span className="text-cyan-400"> Provide</span>
          </h2>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 lg:p-8 min-w-0"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 pointer-events-none" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-2xl sm:text-3xl mb-6 sm:mb-8">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-7">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

