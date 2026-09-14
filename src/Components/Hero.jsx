import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import ahmadProfile from "../images/ahmad2.jpeg"
export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />

            <span className="text-sm font-medium text-purple-300">
              Frontend Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl xl:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Ahmad
            </span>
            <br />
            Anwar.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive and user-focused web experiences using
            React.js, Next.js, JavaScript and Tailwind CSS. I turn ideas and
            designs into clean, interactive and scalable interfaces.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              View My Work →
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-4">
            <span className="text-sm text-gray-600">Find me on</span>

            <a
              // href="#"
              // target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
               href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 scale-90 rounded-[40px] bg-purple-600/20 blur-[80px]" />

            {/* Image Container */}
            <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[35px] border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent shadow-2xl shadow-purple-900/20 sm:h-[500px] sm:w-[380px]">
              <img
                src={ahmadProfile}
                alt="Ahmad Anwar"
                className="h-full w-full object-cover object-top"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07070d] via-[#07070d]/60 to-transparent" />

              {/* Name */}
              <div className="absolute bottom-7 left-7">
                <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
                  Developer
                </p>

                <h2 className="mt-1 text-2xl font-bold text-white">
                  Ahmad Anwar
                </h2>
              </div>
            </div>

            {/* Floating Card - Technologies */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-10 top-16 hidden rounded-2xl border border-white/10 bg-[#0d0d17]/90 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="mb-3 text-xs text-gray-500">Tech Stack</p>

              <div className="flex gap-3 text-xl">
                <FaReact className="text-cyan-400" />
                <SiNextdotjs className="text-white" />
                <SiJavascript className="text-yellow-400" />
                <SiTailwindcss className="text-cyan-300" />
              </div>
            </motion.div>

            {/* Floating Card - Projects */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-8 bottom-20 hidden rounded-2xl border border-purple-500/20 bg-[#0d0d17]/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-2xl font-black text-white">3+</p>

              <p className="text-xs text-gray-500">Projects Built</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

        <div className="h-8 w-px bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
}
