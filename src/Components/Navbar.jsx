import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F7F1E8]/90 backdrop-blur-lg border-b border-[#D8C7A0]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#2F2A24]">
          Ahmad<span className="text-[#C6A972]">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
}
