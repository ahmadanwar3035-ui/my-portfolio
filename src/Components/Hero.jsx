import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaCss3Alt } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";
import ahmadProfile from "../images/ahmad2.jpeg";

const skills = [
  { name: "React.js", icon: SiReact, color: "#2F5BFF" },
  { name: "Next.js", icon: SiNextdotjs, color: "#14162B" },
  { name: "JavaScript", icon: SiJavascript, color: "#F5B301" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#14162B" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const socialClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE1F0] bg-white text-[#4B5070] transition-colors duration-300 hover:border-[#2F5BFF] hover:text-[#2F5BFF]";

const fadeMask =
  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)";

/* One scrolling row of tilted stickers. Pauses on hover; hovered sticker straightens. */
function StickerRow({ items }) {
  return (
    <div
      className="skill-mask overflow-hidden py-8"
      style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
    >
      <div className="skill-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 gap-5 pr-5"
            aria-hidden={copy === 1}
          >
            {items.map((skill, idx) => {
              const Icon = skill.icon;
              const darkText =
                skill.name === "JavaScript" || skill.name === "Tailwind CSS";
              return (
                <div
                  key={skill.name + copy}
                  style={{ "--c": skill.color }}
                  className={`flex items-center gap-3 rounded-2xl bg-[var(--c)] px-6 py-3.5 text-base font-bold shadow-[0_12px_24px_-12px_var(--c)] transition-transform duration-300 hover:rotate-0 hover:scale-110 ${
                    darkText ? "text-[#14162B]" : "text-white"
                  } ${idx % 2 ? "rotate-3" : "-rotate-3"}`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/25 text-lg">
                    <Icon />
                  </span>
                  <span className="whitespace-nowrap">{skill.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 1], [-9, -9]), {
    stiffness: 150,
    damping: 16,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 1], [9, -9]), {
    stiffness: 150,
    damping: 16,
  });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F6F7FC] pb-20 pt-32"
    >
      <style>{`
        @keyframes skill-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes skill-scroll-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .skill-track { animation: skill-scroll 55s linear infinite; }
        .skill-track.reverse { animation-name: skill-scroll-rev; animation-duration: 65s; }
        .skill-mask:hover .skill-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .skill-track { animation: none; } }
      `}</style>

      {/* Background: soft glows + faint dot grid */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#2F5BFF]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-[#FF7A59]/20 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(#C9CFE6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <motion.span
              {...fade(0)}
              className="inline-flex items-center gap-3 rounded-full border border-[#DDE1F0] bg-white px-4 py-2 text-sm font-medium text-[#4B5070] shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF7A59] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF7A59]" />
              </span>
              Frontend Developer
            </motion.span>

            <motion.h1
              {...fade(0.1)}
              className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#14162B] sm:text-6xl xl:text-7xl"
            >
              Hi, I'm
              <br />
              <span className="bg-gradient-to-r from-[#2F5BFF] to-[#7A5CFF] bg-clip-text text-transparent">
                Ahmad Anwar.
              </span>
            </motion.h1>

            <motion.p
              {...fade(0.2)}
              className="mt-7 max-w-xl text-base leading-8 text-[#4B5070] sm:text-lg"
            >
              I build modern, responsive and user-focused web experiences using
              React.js, Next.js, JavaScript and Tailwind CSS — turning ideas and
              designs into clean, interactive interfaces.
            </motion.p>

            <motion.div
              {...fade(0.3)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded-full bg-[#2F5BFF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2F5BFF]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2748E0]"
              >
                View my work →
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-full border border-[#14162B] bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#14162B] transition-colors duration-300 hover:bg-white"
              >
                Contact me
              </button>
              {/* Put your own GitHub link here */}
              <a
                // href="#"
                // target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={socialClass}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/ahmad-anwar-99a676343/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>

          {/* Right: tilting photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[40px] " />
            <img
              src={ahmadProfile}
              alt="Ahmad Anwar"
              className="relative aspect-[4/5] w-full rounded-[40px] border-4 border-white object-cover object-top shadow-2xl"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-10 rounded-2xl border border-[#DDE1F0] bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-8"
            >
              <p className="font-display text-3xl font-bold text-[#14162B]">
                3+
              </p>
              <p className="text-xs text-[#6E7391]">Projects built</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-2 top-8 rounded-2xl bg-[#2F5BFF] px-5 py-3 text-sm font-semibold text-white shadow-xl sm:-right-6"
            >
              Open to work
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Single-row skills conveyor, full width */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative mt-20 border-y border-[#DDE1F0] bg-white py-7"
      >
        <div className="mx-auto mb-1 flex max-w-6xl items-center justify-between px-6 lg:px-10">
          <p className="text-sm font-medium text-[#14162B]">
            Skills I work with
          </p>
          <p className="hidden text-xs text-[#6E7391] sm:block">
            Hover to pause
          </p>
        </div>

        <StickerRow items={skills} />
      </motion.div>
    </section>
  );
}
