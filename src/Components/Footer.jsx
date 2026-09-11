import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Ahmad
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Frontend Developer focused on building modern, responsive and
            engaging web experiences.
          </p>

          <div className="flex justify-center gap-6 mt-8 text-3xl">
            <a
              // href="https://github.com/"
              // target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              // href="https://linkedin.com"
              // target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500">
              © 2026 Ahmad Anwar. Crafted with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
