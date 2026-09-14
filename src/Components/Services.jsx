import { motion } from "framer-motion";
import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineLightningBolt,
  HiOutlineTemplate,
} from "react-icons/hi";
import { SiReact, SiNextdotjs } from "react-icons/si";

export default function Services() {
  const services = [
    {
      number: "01",
      icon: <HiOutlineDesktopComputer />,
      title: "Frontend Development",
      description:
        "Building modern, scalable and interactive web applications with React.js and JavaScript.",
      technologies: ["React.js", "JavaScript", "Redux Toolkit"],
    },
    {
      number: "02",
      icon: <HiOutlineTemplate />,
      title: "UI Implementation",
      description:
        "Turning Figma and design concepts into clean, pixel-focused and production-ready interfaces.",
      technologies: ["HTML", "CSS", "Tailwind CSS"],
    },
    {
      number: "03",
      icon: <HiOutlineDeviceMobile />,
      title: "Responsive Design",
      description:
        "Creating websites that provide a consistent and beautiful experience across mobile, tablet and desktop.",
      technologies: ["Responsive UI", "Tailwind CSS", "Bootstrap"],
    },
    {
      number: "04",
      icon: <HiOutlineLightningBolt />,
      title: "Performance & UX",
      description:
        "Improving frontend performance and creating smooth interactions for better user experiences.",
      technologies: ["Optimization", "UX", "Clean Code"],
    },
    {
      number: "05",
      icon: <SiNextdotjs />,
      title: "Next.js Development",
      description:
        "Developing fast and SEO-friendly web applications using the modern Next.js ecosystem.",
      technologies: ["Next.js", "React", "JavaScript"],
    },
    {
      number: "06",
      icon: <SiReact />,
      title: "React Applications",
      description:
        "Creating reusable component-based applications with maintainable architecture and state management.",
      technologies: ["React.js", "Components", "Redux"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            What I Do
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Services I
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            I focus on building modern digital experiences with clean code,
            thoughtful design and technologies that help websites perform
            better.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-purple-500/[0.04]"
            >
              {/* Number */}
              <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.03] transition-all duration-500 group-hover:text-purple-500/[0.08]">
                {service.number}
              </div>

              {/* Top Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/0 blur-[50px] transition-all duration-500 group-hover:bg-purple-600/20" />

              {/* Icon */}
              <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-2xl text-purple-400 transition-all duration-500 group-hover:scale-110 group-hover:border-purple-500/40 group-hover:bg-purple-500/20">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400 transition-colors duration-300 group-hover:border-purple-500/20 group-hover:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-3xl border border-purple-500/10 bg-gradient-to-r from-purple-500/[0.06] to-fuchsia-500/[0.03] p-7 sm:p-9"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold text-white">
                Have a project in mind?
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Let's turn your idea into a modern digital experience.
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/20"
            >
              Let's Talk →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
