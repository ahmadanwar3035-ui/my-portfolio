import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function Experience() {
  const experience = {
    period: " 2026 — Present",
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
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Career Journey
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            My
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A look at my professional journey, the projects I've worked on and
            the skills I've developed along the way.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mt-14">
          {/* Timeline Line */}
          <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent md:block" />

          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:pl-14"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-purple-500/40 bg-[#07070d] md:flex">
              <div className="h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
            </div>

            {/* Main Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-purple-500/30 hover:bg-purple-500/[0.03] sm:p-9">
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-600/0 blur-[90px] transition-all duration-500 group-hover:bg-purple-600/10" />

              <div className="relative">
                {/* Header */}
                <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
                  <div>
                    {/* Role */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                        <HiOutlineBriefcase />
                      </div>

                      <div>
                        <p className="text-sm text-purple-400">
                          {experience.company}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-white">
                          {experience.role}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2">
                    <HiOutlineCalendar className="text-purple-400" />

                    <span className="text-xs font-medium text-gray-400">
                      {experience.period}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="mt-7 flex items-center gap-2 text-sm text-gray-500">
                  <HiOutlineLocationMarker className="text-purple-400" />

                  <span>{experience.location}</span>

                  <span className="mx-1 text-gray-700">•</span>

                  <span>Internship</span>
                </div>

                {/* Description */}
                <p className="mt-6 max-w-4xl text-sm leading-7 text-gray-500 sm:text-base">
                  {experience.description}
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-white/10" />

                {/* Responsibilities */}
                <div>
                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Key Responsibilities
                  </h4>

                  <div className="grid gap-4 md:grid-cols-2">
                    {experience.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-gray-500"
                      >
                        <HiOutlineCheckCircle className="mt-1 flex-shrink-0 text-purple-400" />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-8">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/[0.03] px-5 py-4"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
          </span>

          <p className="text-sm text-gray-500">
            Currently growing, learning and building real-world frontend
            experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
