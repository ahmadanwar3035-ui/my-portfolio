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
            <span className="text-sm text-[#4B5070]">Academic journey</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] p-7 sm:p-9"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2F5BFF]/10 text-2xl text-[#2F5BFF]">
                <HiOutlineAcademicCap />
              </div>

              <p className="mt-7 text-sm font-medium text-[#2748E0]">
                {education.institute}
              </p>

              <h3 className="mt-2 font-display text-2xl font-medium text-[#14162B] sm:text-3xl">
                {education.degree}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-[#DDE1F0] px-4 py-2">
                  <HiOutlineCalendar className="text-[#2748E0]" />
                  <span className="text-xs text-[#4B5070]">
                    {education.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#DDE1F0] px-4 py-2">
                  <HiOutlineLocationMarker className="text-[#2748E0]" />
                  <span className="text-xs text-[#4B5070]">
                    {education.location}
                  </span>
                </div>
              </div>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#2F5BFF]/20 bg-[#2F5BFF]/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#2F5BFF]" />
                <span className="text-xs font-medium text-[#2F5BFF]">
                  Currently studying
                </span>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="leading-8 text-[#4B5070]">
                {education.description}
              </p>

              <div className="my-7 h-px bg-[#DDE1F0]" />

              <h4 className="mb-5 text-sm font-medium text-[#14162B]">
                Areas of study
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                {education.subjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex items-center gap-3 rounded-xl border border-[#DDE1F0] px-4 py-3"
                  >
                    <HiOutlineCheckCircle className="flex-shrink-0 text-[#2748E0]" />
                    <span className="text-sm text-[#4B5070]">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-[#DDE1F0] bg-[#FFFFFF] px-6 py-5 text-center"
        >
          <p className="font-display text-sm italic text-[#4B5070]">
            "Learning never stops — every project is another opportunity to
            grow."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
