import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712] lg:ml-[270px]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-20">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-sm font-black text-white shadow-lg shadow-purple-600/20 transition-transform duration-300 group-hover:scale-105">
                AA
              </div>

              <div className="text-left">
                <p className="text-sm font-bold text-white">Ahmad Anwar</p>

                <p className="text-xs text-gray-600">Frontend Developer</p>
              </div>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <a
              // href="https://github.com/"
              // target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ahmad-anwar-99a676343/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              <FaLinkedinIn />
            </a>

            <a
              // href="mailto:ahmadanwar3035@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            >
              @
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ahmad Anwar. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-600">
            Crafted with
            <FaHeart className="text-[10px] text-purple-500" />
            using React & Tailwind CSS
          </p>

          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-gray-500 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
          >
            Back to top
            <HiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
