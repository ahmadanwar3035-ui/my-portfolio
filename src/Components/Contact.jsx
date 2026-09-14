import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Message sent successfully! ✅");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 lg:ml-[270px] lg:px-12 xl:px-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Let's Work
            <span className="ml-2 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Have a project, idea or opportunity? Feel free to reach out. I'd
            love to hear from you and discuss how we can build something great.
          </p>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
        </motion.div>

        {/* Contact Layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                I'm always open to discussing frontend development,
                collaborations, freelance projects and new opportunities.
              </p>

              {/* Email */}
              <a
                href="mailto:ahmadanwar3035@gmail.com"
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                  <HiOutlineMail />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-600">Email</p>

                  <p className="mt-1 truncate text-sm text-gray-300 transition-colors group-hover:text-purple-300">
                    ahmadanwar3035@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                  <HiOutlineLocationMarker />
                </div>

                <div>
                  <p className="text-xs text-gray-600">Location</p>

                  <p className="mt-1 text-sm text-gray-300">Pakistan</p>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Connect With Me
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    // href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/[0.03] p-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                </span>

                <p className="text-xs text-gray-500">
                  Available for frontend opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white">
                Send Me a Message
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and I'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-purple-500/[0.03]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-purple-500/[0.03]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-purple-500/[0.03]"
                />
              </div>

              {/* Status */}
              {status && (
                <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-sm text-green-400">
                  <HiOutlineCheckCircle className="text-lg" />

                  {status}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-600/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-600/30"
              >
                Send Message
                <HiOutlinePaperAirplane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
