import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiAcademicCap,
  HiCode,
  HiCollection,
  HiMail,
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";
import { FaServicestack } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home", icon: <HiHome /> },
    { name: "About", id: "about", icon: <HiUser /> },
    { name: "Services", id: "services", icon: <FaServicestack /> },
    { name: "Experience", id: "experience", icon: <HiBriefcase /> },
    { name: "Education", id: "education", icon: <HiAcademicCap /> },
    { name: "Projects", id: "projects", icon: <HiCollection /> },
    { name: "Skills", id: "skills", icon: <HiCode /> },
    // { name: "Certificates", id: "certificates", icon: <HiCollection /> },
    { name: "Contact", id: "contact", icon: <HiMail /> },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-[100] flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-[#0b0b14]/90 text-2xl text-purple-400 backdrop-blur-xl lg:hidden"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-[90] flex h-screen w-[270px]
          flex-col border-r border-white/10 bg-[#07070d]
          px-6 py-8 transition-transform duration-300
          lg:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="mb-12">
          <button
            onClick={() => scrollToSection("home")}
            className="group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-xl font-black text-white shadow-lg shadow-purple-500/20">
                AA
              </div>

              <div>
                <h1 className="text-lg font-bold text-white">Ahmad Anwar</h1>

                <p className="text-xs text-gray-500">Frontend Developer</p>
              </div>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 overflow-y-auto pr-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-gray-400 transition-all duration-300 hover:bg-purple-500/10 hover:text-white"
            >
              <span className="text-xl text-gray-500 transition-colors duration-300 group-hover:text-purple-400">
                {item.icon}
              </span>

              <span className="text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-6 border-t border-white/10 pt-6">
          <div className="rounded-2xl border border-purple-500/10 bg-purple-500/5 p-4">
            <p className="text-xs leading-5 text-gray-500">
              Building modern, responsive and user-focused web experiences.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="text-xs text-gray-400">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
