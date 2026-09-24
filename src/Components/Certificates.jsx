import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineBadgeCheck } from "react-icons/hi";

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
            <span className="text-sm text-[#4B5070]">Learning & growth</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] sm:text-5xl">
            Certificates & learning
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#4B5070]">
            A collection of courses and learning achievements that represent my
            continuous journey in frontend development.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group overflow-hidden rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF]"
            >
              <div className="relative h-44 overflow-hidden bg-[#F6F7FC]">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#DDE1F0] bg-[#FFFFFF]/90 text-lg text-[#2748E0] backdrop-blur-md">
                  <HiOutlineBadgeCheck />
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-medium uppercase tracking-wide text-[#2748E0]">
                  {certificate.category}
                </span>

                <h3 className="mt-2 font-display text-lg font-medium text-[#14162B]">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6E7391]">
                  {certificate.description}
                </p>

                <button
                  onClick={() => window.open(certificate.image, "_blank")}
                  className="mt-5 flex items-center gap-2 text-xs font-medium text-[#4B5070] transition-colors duration-300 hover:text-[#2748E0]"
                >
                  View certificate
                  <HiOutlineExternalLink />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
