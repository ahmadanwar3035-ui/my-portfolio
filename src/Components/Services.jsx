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
      icon: <HiOutlineDesktopComputer />,
      title: "Frontend development",
      description:
        "Building modern, scalable and interactive web applications with React.js and JavaScript.",
      technologies: ["React.js", "JavaScript", "Redux Toolkit"],
    },
    {
      icon: <HiOutlineTemplate />,
      title: "UI implementation",
      description:
        "Turning Figma and design concepts into clean, pixel-focused and production-ready interfaces.",
      technologies: ["HTML", "CSS", "Tailwind CSS"],
    },
    {
      icon: <HiOutlineDeviceMobile />,
      title: "Responsive design",
      description:
        "Creating websites that provide a consistent, beautiful experience across mobile, tablet and desktop.",
      technologies: ["Responsive UI", "Tailwind CSS", "Bootstrap"],
    },
    {
      icon: <HiOutlineLightningBolt />,
      title: "Performance & UX",
      description:
        "Improving frontend performance and creating smooth interactions for better user experiences.",
      technologies: ["Optimization", "UX", "Clean code"],
    },
    {
      icon: <SiNextdotjs />,
      title: "Next.js development",
      description:
        "Developing fast and SEO-friendly web applications using the modern Next.js ecosystem.",
      technologies: ["Next.js", "React", "JavaScript"],
    },
    {
      icon: <SiReact />,
      title: "React applications",
      description:
        "Creating reusable component-based applications with maintainable architecture and state management.",
      technologies: ["React.js", "Components", "Redux"],
    },
  ];

  return (
    <section
      id="services"
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
            <span className="text-sm text-[#4B5070]">What I do</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Services I provide
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#4B5070]">
            I focus on building modern digital experiences with clean code,
            thoughtful design and technologies that help websites perform
            better.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#DDE1F0] bg-[#DDE1F0] md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-[#FFFFFF] p-8 transition-colors duration-300 hover:bg-[#EEF1FF]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#DDE1F0] text-xl text-[#2748E0] transition-colors duration-300 group-hover:border-[#2748E0]/40">
                {service.icon}
              </div>

              <h3 className="font-display text-lg font-medium text-[#14162B]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6E7391]">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span key={technology} className="text-[11px] text-[#6E7391]">
                    {technology}
                    {service.technologies.indexOf(technology) !==
                      service.technologies.length - 1 && (
                      <span className="ml-2 text-[#2748E0]/40">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#DDE1F0] bg-[#2F5BFF] p-8 text-[#F6F7FC] sm:flex-row sm:items-center sm:p-10"
        >
          <div>
            <h3 className="font-display text-xl font-medium">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm text-[#F6F7FC]/70">
              Let's turn your idea into a modern digital experience.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 rounded-full bg-[#F6F7FC] px-6 py-3 text-sm font-medium text-[#14162B] transition-transform duration-300 hover:scale-105"
          >
            Let's talk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
