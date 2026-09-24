import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

// Floating pill navbar at the top (replaces the old left sidebar).
// File name is kept as Sidebar.jsx so App.jsx doesn't need to change.
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-[90] px-4">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-2 rounded-full border border-[#DDE1F0] bg-[#FFFFFF]/80 p-2 backdrop-blur-xl">
          <button
            onClick={() => go("home")}
            aria-label="Go to home"
            className="flex items-center gap-3 rounded-full pr-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2748E0] to-[#2F5BFF] font-display text-sm font-semibold text-[#F6F7FC]">
              AA
            </span>
            <span className="hidden font-display text-sm font-semibold text-[#14162B] xl:block">
              Ahmad Anwar
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  active === item.id
                    ? "bg-[#2748E0]/15 text-[#14162B]"
                    : "text-[#4B5070] hover:text-[#14162B]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => go("contact")}
            className="hidden rounded-full bg-[#14162B] px-5 py-2.5 text-sm font-semibold text-[#F6F7FC] transition-colors duration-300 hover:bg-[#2748E0] lg:block"
          >
            Hire me
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1F0] text-xl text-[#14162B] lg:hidden"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {open && (
          <div className="mt-2 grid grid-cols-2 gap-2 rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF]/95 p-3 backdrop-blur-xl lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                  active === item.id
                    ? "bg-[#2748E0]/15 text-[#14162B]"
                    : "text-[#4B5070]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
