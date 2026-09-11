
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "3+", title: "Projects" },
    { number: "10+", title: "Technologies" },
    { number: "1+", title: "Experience" },
    { number: "100%", title: "Passion" },
  ];

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#040816]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 text-center hover:border-cyan-500/30 transition duration-300"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm lg:text-base mt-2 sm:mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

