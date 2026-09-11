import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Services", "services"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Education", "education"],
    ["Projects", "projects"],
    ["Certificates", "certificates"],
    ["Contact", "contact"],
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* ================= LOGO ================= */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-black text-base sm:text-lg">
            AA
          </div>

          <div className="hidden sm:block text-left">
            <h3 className="font-bold text-sm sm:text-base">Ahmad Anwar</h3>

            <p className="text-[9px] sm:text-[10px] text-gray-500 tracking-[0.15em] sm:tracking-widest">
              FRONTEND DEVELOPER
            </p>
          </div>
        </button>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {links.map(([name, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* ================= CV ================= */}
        <a
          href="/Ahmad-Anwar-CV.pdf"
          download
          className="hidden lg:block shrink-0 px-4 sm:px-5 py-2.5 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium cursor-pointer text-sm sm:text-base"
        >
          Download CV
        </a>

        {/* ================= MOBILE / TABLET MENU ================= */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          className="xl:hidden shrink-0 text-3xl text-gray-300 hover:text-cyan-400 transition cursor-pointer"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-[#050b18]/98 backdrop-blur-xl border-t border-white/5 shadow-2xl">
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto">
            {links.map(([name, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left px-5 sm:px-6 py-4 border-b border-white/5 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 transition cursor-pointer"
              >
                {name}
              </button>
            ))}

            {/* CV inside mobile menu */}
            <a
              href="/Ahmad-Anwar-CV.pdf"
              download
              onClick={() => setOpen(false)}
              className="block mx-5 sm:mx-6 my-4 text-center px-5 py-3 rounded-xl border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
