import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineDeviceMobile,
  HiOutlineAcademicCap,
} from "react-icons/hi";

export default function About() {
  const stats = [
    { number: "3+", label: "Projects completed" },
    { number: "13+", label: "Technologies" },
    { number: "1+", label: "Years experience" },
    { number: "∞", label: "Learning journey" },
  ];

  const highlights = [
    {
      icon: <HiOutlineCode />,
      title: "Clean code",
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
      title: "Always learning",
      text: "Continuously improving my skills and exploring modern technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#F6F7FC] px-6 py-24 lg:px-12 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#2748E0]" />
            <span className="text-sm text-[#4B5070]">About me</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Turning ideas into digital experiences
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-medium text-[#14162B]">
              Hi, I'm Ahmad Anwar
            </h3>

            <p className="mt-6 max-w-xl leading-8 text-[#4B5070]">
              I'm a passionate frontend developer focused on creating modern,
              responsive and user-friendly web applications. I enjoy turning UI
              designs into interactive digital experiences that feel smooth and
              intuitive.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[#4B5070]">
              My primary focus is on the React ecosystem, including React.js,
              Next.js and Redux Toolkit, alongside JavaScript and Tailwind CSS,
              to build clean and scalable interfaces.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[#4B5070]">
              Great frontend development isn't just about making a website look
              good — it's about creating an experience that is fast, accessible
              and enjoyable to use.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
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
                  className="rounded-full border border-[#DDE1F0] bg-[#FFFFFF] px-4 py-2 text-xs font-medium text-[#4B5070] transition-colors duration-300 hover:border-[#2748E0]/50 hover:text-[#14162B]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#DDE1F0] bg-[#FFFFFF] p-6 transition-colors duration-300 hover:border-[#2748E0]/40"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#2F5BFF]/10 text-xl text-[#2F5BFF]">
                  {item.icon}
                </div>
                <h4 className="font-display text-lg font-medium text-[#14162B]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#6E7391]">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid overflow-hidden rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-7 text-center ${
                index !== stats.length - 1
                  ? "border-b border-[#DDE1F0] sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <h3 className="font-display text-4xl font-semibold text-[#14162B]">
                {stat.number}
              </h3>
              <p className="mt-2 text-sm text-[#6E7391]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
