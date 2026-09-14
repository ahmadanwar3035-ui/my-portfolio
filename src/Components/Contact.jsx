import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("Please enter your name. ❌");
      return;
    }

    if (!formData.email.trim()) {
      setStatus("Please enter your email. ❌");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("Please enter your message. ❌");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_93501mg",
        "template_enmou68",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "GSpgcxXuTr7qQf2yL",
      );

      console.log("EmailJS Success:", result);

      setStatus("Message sent successfully! ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      if (error?.text) {
        setStatus(error.text);
      } else {
        setStatus("Something went wrong. Please try again. ❌");
      }
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatus("");
      }, 6000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white md:px-10 lg:ml-[270px] lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
            Get In Touch
          </span>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Have a project in mind or want to discuss an opportunity? Feel free
            to send me a message.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold">
              Let's build something amazing.
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm always open to discussing new projects, creative ideas,
              frontend opportunities, and collaborations.
            </p>

            {/* Email */}
            <a
              href="mailto:ahmadanwar3035@gmail.com"
              className="group mt-8 flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-500/20">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm text-white sm:text-base">
                  ahmadanwar3035@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm text-white sm:text-base">Pakistan</p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-5">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400 shadow-lg shadow-green-400/50" />

                <p className="text-sm font-medium text-gray-200">
                  Available for opportunities
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Currently available for frontend development projects,
                internships, and exciting collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}
            </button>

            {/* Status */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 rounded-xl border px-4 py-3 text-center text-sm ${
                  status.includes("successfully")
                    ? "border-green-500/20 bg-green-500/10 text-green-400"
                    : "border-red-500/20 bg-red-500/10 text-red-400"
                }`}
              >
                {status}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
