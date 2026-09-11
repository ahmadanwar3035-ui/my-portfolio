import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import reactCertife from "../images/react.png";
import javaCertife from "../images/javascript.png";
import responsiveCertife from "../images/webresponsive.png";
import fronteCertife from "../images/frontenmd.png";

const certificates = [
  {
    title: "Frontend Development",
    image: fronteCertife,
  },
  {
    title: "React.js",
    image: reactCertife,
  },
  {
    title: "JavaScript",
    image: javaCertife,
  },
  {
    title: "Responsive Web Design",
    image: responsiveCertife,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-32 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.3em]">
            Achievements
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            My
            <span className="text-cyan-400"> Certificates</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-cyan-400 mb-4">
                  <FaAward />
                  <span>Certificate</span>
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 font-medium">
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
