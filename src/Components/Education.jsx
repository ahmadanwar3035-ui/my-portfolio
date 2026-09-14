import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function Education() {
  const education = {
    period: "2026 — Present",
    degree: "BS Computer Science",
    institute: "Virtual University of Pakistan",
    location: "Pakistan",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science while developing practical skills in software engineering, web development and modern frontend technologies.",
    subjects: [
      "Software Engineering",
      "Web Development",
      "Data Structures",
      "Programming Fundamentals",
      "Database Concepts",
      "Modern Frontend Technologies",
    ],
  };

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Academic Journey
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            My
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            My academic journey is helping me build a strong foundation in
            computer science while applying what I learn to real-world
            development.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-purple-500/30 hover:bg-purple-500/[0.03] sm:p-9"
        >
          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/0 blur-[100px] transition-all duration-500 group-hover:bg-purple-600/10" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-3xl text-purple-400">
                <HiOutlineAcademicCap />
              </div>

              <p className="mt-7 text-sm font-medium text-purple-400">
                {education.institute}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {education.degree}
              </h3>

              {/* Date */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2">
                  <HiOutlineCalendar className="text-purple-400" />

                  <span className="text-xs text-gray-400">
                    {education.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <HiOutlineLocationMarker className="text-purple-400" />

                  <span className="text-xs text-gray-400">
                    {education.location}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <span className="text-xs font-medium text-green-400">
                  Currently Studying
                </span>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="leading-8 text-gray-500">{education.description}</p>

              <div className="my-7 h-px bg-white/10" />

              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-300">
                Areas of Study
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                {education.subjects.map((subject) => (
                  <div
                    key={subject}
                    className="group/item flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-purple-500/20 hover:bg-purple-500/5"
                  >
                    <HiOutlineCheckCircle className="flex-shrink-0 text-purple-400" />

                    <span className="text-sm text-gray-500 transition-colors group-hover/item:text-gray-300">
                      {subject}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
        </motion.div>

        {/* Learning Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-2xl border border-purple-500/10 bg-purple-500/[0.03] px-6 py-5 text-center"
        >
          <p className="text-sm italic text-gray-500">
            "Learning never stops — every project is another opportunity to
            grow."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
