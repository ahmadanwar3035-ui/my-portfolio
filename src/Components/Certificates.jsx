import { motion } from "framer-motion";
import {
  HiOutlineExternalLink,
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
} from "react-icons/hi";

export default function Certificates() {
  const certificates = [
    {
      title: "React.js",
      category: "Frontend Development",
      description:
        "Learning and building modern user interfaces with React.js, reusable components and modern frontend practices.",
      image: "/certificates/react.png",
    },
    {
      title: "JavaScript",
      category: "Programming",
      description:
        "Building a strong foundation in JavaScript, ES6+ features, DOM manipulation and modern development concepts.",
      image: "/certificates/javascript.png",
    },
    {
      title: "Responsive Web Design",
      category: "Web Development",
      description:
        "Learning how to create responsive and accessible interfaces that work smoothly across different screen sizes.",
      image: "/certificates/responsive.png",
    },
    {
      title: "Frontend Development",
      category: "Web Development",
      description:
        "Developing practical frontend skills including HTML, CSS, JavaScript, UI implementation and responsive layouts.",
      image: "/certificates/frontend.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

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
            Learning & Growth
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Certificates &
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Learning
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A collection of courses and learning achievements that represent my
            continuous journey in frontend development.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Certificate Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-950/40 to-black">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-transparent to-transparent" />

                {/* Icon */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-[#0b0b14]/80 text-xl text-purple-400 backdrop-blur-md">
                  <HiOutlineBadgeCheck />
                </div>

                {/* Number */}
                <span className="absolute bottom-4 right-5 text-4xl font-black text-white/10">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400">
                  {certificate.category}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {certificate.description}
                </p>

                {/* View */}
                <button
                  onClick={() => window.open(certificate.image, "_blank")}
                  className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-400 transition-colors duration-300 hover:text-purple-400"
                >
                  View Certificate
                  <HiOutlineExternalLink />
                </button>
              </div>

              {/* Bottom Line */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Learning Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-purple-500/10 bg-purple-500/[0.03] p-7 sm:flex-row sm:items-center"
        >
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl text-purple-400">
            <HiOutlineAcademicCap />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Always Learning</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              These certificates represent my learning journey. I'm continuously
              exploring new technologies, improving my skills and building
              real-world projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
