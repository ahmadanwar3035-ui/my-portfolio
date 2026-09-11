
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="text-center">

          {/* Logo */}
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ahmad<span className="text-cyan-400">.</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base mt-5 sm:mt-6 max-w-xl mx-auto leading-7">
            Frontend Developer focused on building modern, responsive and
            engaging web experiences.
          </p>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-5 sm:gap-6 mt-7 sm:mt-8 text-2xl sm:text-3xl">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ahmadanwar3035@gmail.com"
              aria-label="Email"
              className="hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs sm:text-sm leading-6">
              © 2026 Ahmad Anwar. Crafted with React & Tailwind CSS.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
