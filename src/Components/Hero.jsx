import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import imageProfile from "../images/ahmad2.jpeg";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400">
              Frontend Developer
            </span>

            <h1 className="text-6xl lg:text-8xl font-black mt-8 leading-tight">
              Ahmad
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Anwar
              </span>
            </h1>

            <p className="text-gray-400 text-xl mt-8 leading-8 max-w-xl">
              I craft modern web experiences with React.js, Next.js and Tailwind
              CSS focused on performance, clean UI and seamless user
              interactions.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300"
              >
                View Projects
                <FaArrowRight />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-6 mt-10 text-3xl">
              <a
                // href="https://www.linkedin.com/in/ahmad-anwar-99a676343/"
                // target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                // href="https://github.com/"
                // target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative border border-cyan-500/20 bg-white/5 backdrop-blur-lg rounded-[30px] p-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-[30px]" />

              <img
                src={imageProfile}
                alt="profile"
                className="relative w-[420px] h-[500px] object-cover rounded-3xl"
              />

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-[#0f172a]/90 backdrop-blur-xl border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold">
                  React.js Developer
                </p>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <h4 className="text-cyan-400 font-bold text-3xl">10+</h4>
              <p className="text-gray-400">Technologies</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-10 -right-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
            >
              <h4 className="text-purple-400 font-bold text-3xl">3+</h4>
              <p className="text-gray-400">Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
