
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
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
      <div className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-cyan-500/20 blur-[120px] lg:blur-[180px] rounded-full pointer-events-none" />

      <div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/20 blur-[120px] lg:blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex items-center relative z-10 pt-28 pb-20 lg:pt-20 lg:pb-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <span className="inline-block px-4 sm:px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-400 text-sm sm:text-base">
              Frontend Developer
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black mt-7 sm:mt-8 leading-[0.95]">
              Ahmad
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Anwar
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mt-7 sm:mt-8 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
              I craft modern web experiences with React.js, Next.js and
              Tailwind CSS focused on performance, clean UI and seamless
              user interactions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-8 sm:mt-10">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300"
              >
                View Projects
                <FaArrowRight />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 mt-9 sm:mt-10 text-2xl sm:text-3xl">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full flex justify-center px-4 sm:px-8 lg:px-0"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[390px] xl:max-w-[420px] border border-cyan-500/20 bg-white/5 backdrop-blur-lg rounded-[25px] sm:rounded-[30px] p-3 sm:p-4"
            >
              {/* Image Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-[30px] pointer-events-none" />

              <img
                src={imageProfile}
                alt="Ahmad Anwar"
                className="relative w-full aspect-[4/5] object-cover rounded-2xl sm:rounded-3xl"
              />

              {/* Developer Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#0f172a]/95 backdrop-blur-xl border border-cyan-500/20">
                <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                  React.js Developer
                </p>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="hidden sm:block absolute bottom-8 left-0 lg:-left-6 xl:-left-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 lg:p-6"
            >
              <h4 className="text-cyan-400 font-bold text-2xl lg:text-3xl">
                10+
              </h4>
              <p className="text-gray-400 text-sm lg:text-base">
                Technologies
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="hidden sm:block absolute top-8 right-0 lg:-right-6 xl:-right-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl p-4 lg:p-6"
            >
              <h4 className="text-purple-400 font-bold text-2xl lg:text-3xl">
                3+
              </h4>
              <p className="text-gray-400 text-sm lg:text-base">
                Projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

