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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-black text-lg">
            AA
          </div>

          <div className="hidden sm:block text-left">
            <h3 className="font-bold">Ahmad Anwar</h3>
            <p className="text-[10px] text-gray-500 tracking-widest">
              FRONTEND DEVELOPER
            </p>
          </div>
        </button>

        {/* Desktop */}
        <nav className="hidden xl:flex items-center gap-7 cursor-pointer">
          {links.map(([name, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-gray-400 hover:text-cyan-400 transitio cursor-pointer"
            >
              {name}
            </button>
          ))}
        </nav>

        {/* CV */}
        <a
          href="/Ahmad-Anwar-CV.pdf"
          download
          className="hidden lg:block px-5 py-2.5 rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium cursor-pointer"
        >
          Download CV
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-3xl text-gray-300 cursor-pointer"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-[#050b18] border-t border-white/5 cursor-pointer">
          {links.map(([name, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left px-6 py-4 border-b border-white/5 text-gray-300 hover:text-cyan-400 cursor-pointer"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
