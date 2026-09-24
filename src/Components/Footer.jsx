import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#DDE1F0] bg-[#EDEFF8]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <button onClick={scrollToTop} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14162B] font-display text-sm font-semibold text-[#F6F7FC]">
              AA
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#14162B]">
                Ahmad Anwar
              </p>
              <p className="text-xs text-[#6E7391]">Frontend Developer</p>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <a
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1F0] text-[#4B5070] transition-colors duration-300 hover:border-[#2748E0] hover:text-[#2748E0]"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ahmad-anwar-99a676343/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1F0] text-[#4B5070] transition-colors duration-300 hover:border-[#2748E0] hover:text-[#2748E0]"
            >
              <FaLinkedinIn />
            </a>

            <a
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1F0] text-[#4B5070] transition-colors duration-300 hover:border-[#2748E0] hover:text-[#2748E0]"
            >
              @
            </a>
          </div>
        </div>

        <div className="my-8 h-px bg-[#DDE1F0]" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#6E7391]">
            © {new Date().getFullYear()} Ahmad Anwar. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#6E7391]">
            Crafted with
            <FaHeart className="text-[10px] text-[#2748E0]" />
            using React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-[#DDE1F0] px-4 py-2.5 text-xs font-medium text-[#4B5070] transition-colors duration-300 hover:border-[#2748E0] hover:text-[#2748E0]"
          >
            Back to top
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
