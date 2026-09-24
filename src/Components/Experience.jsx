import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function Experience() {
  const experience = {
    period: "2026 — Present",
    role: "Frontend Developer Intern",
    company: "ZEIKH Technologies",
    location: "Pakistan",
    description:
      "Working on modern web applications and transforming UI designs into responsive, interactive and production-ready frontend experiences.",
    responsibilities: [
      "Developing responsive web applications using React.js and modern frontend technologies.",
      "Building reusable and maintainable React components for scalable interfaces.",
      "Managing application state using Redux Toolkit.",
      "Converting Figma designs into accurate and responsive production interfaces.",
      "Improving frontend performance, usability and overall user experience.",
      "Collaborating with developers using Git and GitHub workflows.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  };

  return (
    <section
      id="experience"
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
            <span className="text-sm text-[#4B5070]">Career journey</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Experience
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-[#DDE1F0] md:block" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative md:pl-14"
          >
            <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border border-[#2748E0] bg-[#F6F7FC] md:flex">
              <div className="h-2.5 w-2.5 rounded-full bg-[#2748E0]" />
            </div>

            <div className="rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] p-7 sm:p-9">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F5BFF]/10 text-xl text-[#2F5BFF]">
                    <HiOutlineBriefcase />
                  </div>
                  <div>
                    <p className="text-sm text-[#2748E0]">
                      {experience.company}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-medium text-[#14162B]">
                      {experience.role}
                    </h3>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-[#DDE1F0] px-4 py-2">
                  <HiOutlineCalendar className="text-[#2748E0]" />
                  <span className="text-xs font-medium text-[#4B5070]">
                    {experience.period}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-[#6E7391]">
                <HiOutlineLocationMarker className="text-[#2748E0]" />
                <span>{experience.location}</span>
                <span className="mx-1 text-[#DDE1F0]">•</span>
                <span>Internship</span>
              </div>

              <p className="mt-6 max-w-4xl text-sm leading-7 text-[#4B5070] sm:text-base">
                {experience.description}
              </p>

              <div className="my-7 h-px bg-[#DDE1F0]" />

              <div>
                <h4 className="mb-5 text-sm font-medium text-[#14162B]">
                  Key responsibilities
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  {experience.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-[#4B5070]"
                    >
                      <HiOutlineCheckCircle className="mt-1 flex-shrink-0 text-[#2748E0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium text-[#14162B]">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#DDE1F0] px-4 py-2 text-xs text-[#4B5070]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex items-center gap-3 rounded-2xl border border-[#DDE1F0] bg-[#FFFFFF] px-5 py-4"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#2F5BFF]" />
          <p className="text-sm text-[#4B5070]">
            Currently growing, learning and building real-world frontend
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
