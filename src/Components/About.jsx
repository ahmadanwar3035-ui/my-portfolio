import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineAcademicCap,
} from "react-icons/hi";

export default function About() {
  const stats = [
    {
      number: "3+",
      label: "Projects Completed",
    },
    {
      number: "13+",
      label: "Technologies",
    },
    {
      number: "1+",
      label: "Years Experience",
    },
    {
      number: "∞",
      label: "Learning Journey",
    },
  ];

  const highlights = [
    {
      icon: <HiOutlineCode />,
      title: "Clean Code",
      text: "Writing reusable, maintainable and scalable React components.",
    },
    {
      icon: <HiOutlineLightningBolt />,
      title: "Performance",
      text: "Building fast and optimized interfaces with smooth interactions.",
    },
    {
      icon: <HiOutlineDeviceMobile />,
      title: "Responsive",
      text: "Creating experiences that look great on every screen size.",
    },
    {
      icon: <HiOutlineAcademicCap />,
      title: "Always Learning",
      text: "Continuously improving my skills and exploring modern technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            About Me
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Turning Ideas Into
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white">
              Hi, I'm Ahmad Anwar 👋
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I'm a passionate Frontend Developer focused on creating modern,
              responsive and user-friendly web applications. I enjoy turning UI
              designs into interactive digital experiences that feel smooth and
              intuitive.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My primary focus is on the React ecosystem, including React.js,
              Next.js and Redux Toolkit. I also work with JavaScript, Tailwind
              CSS and modern frontend development practices to build clean and
              scalable interfaces.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I believe great frontend development is not just about making a
              website look good. It's about creating an experience that is fast,
              accessible, responsive and enjoyable for users.
            </p>

            {/* Skills Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React.js",
                "Next.js",
                "JavaScript",
                "Redux Toolkit",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl text-purple-400 transition-all duration-300 group-hover:bg-purple-500/20">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-white">{item.title}</h4>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group p-7 text-center transition-all duration-300 hover:bg-purple-500/[0.04] ${
                index !== stats.length - 1
                  ? "border-b border-white/10 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <h3 className="text-4xl font-black text-white transition-colors duration-300 group-hover:text-purple-400">
                {stat.number}
              </h3>

              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
