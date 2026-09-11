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
    <section id="services" className="py-32 bg-[#040816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 tracking-[0.3em] uppercase">
            Services
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            What I<span className="text-cyan-400"> Provide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-3xl mb-8">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-400 leading-7">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
