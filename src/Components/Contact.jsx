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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setStatus("Please enter your email.");
      return;
    }
    if (!formData.message.trim()) {
      setStatus("Please enter your message.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_93501mg",
        "template_enmou68",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "GSpgcxXuTr7qQf2yL",
      );

      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(error?.text || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 6000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F6F7FC] px-5 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#2748E0]" />
            <span className="text-sm text-[#4B5070]">Get in touch</span>
          </div>

          <h2 className="font-display text-4xl font-semibold text-[#14162B] md:text-5xl">
            Let's work together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#4B5070]">
            Have a project in mind or want to discuss an opportunity? Feel free
            to send me a message.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] p-8"
          >
            <h3 className="font-display text-2xl font-medium text-[#14162B]">
              Let's build something amazing.
            </h3>

            <p className="mt-4 leading-7 text-[#4B5070]">
              I'm always open to discussing new projects, creative ideas,
              frontend opportunities, and collaborations.
            </p>

            <a
              href="mailto:ahmadanwar3035@gmail.com"
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F5BFF]/10 text-[#2F5BFF]">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-[#6E7391]">Email</p>
                <p className="text-sm text-[#14162B] sm:text-base">
                  ahmadanwar3035@gmail.com
                </p>
              </div>
            </a>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F5BFF]/10 text-[#2F5BFF]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-[#6E7391]">Location</p>
                <p className="text-sm text-[#14162B] sm:text-base">Pakistan</p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[#DDE1F0] bg-[#F6F7FC] p-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2F5BFF]" />
                <p className="text-sm font-medium text-[#14162B]">
                  Available for opportunities
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#4B5070]">
                Currently available for frontend development projects,
                internships, and exciting collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-[#DDE1F0] bg-[#FFFFFF] p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#14162B]"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                className="w-full rounded-xl border border-[#DDE1F0] bg-[#F6F7FC] px-4 py-3.5 text-[#14162B] outline-none transition-colors duration-300 placeholder:text-[#6E7391] focus:border-[#2748E0]"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#14162B]"
              >
                Your email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full rounded-xl border border-[#DDE1F0] bg-[#F6F7FC] px-4 py-3.5 text-[#14162B] outline-none transition-colors duration-300 placeholder:text-[#6E7391] focus:border-[#2748E0]"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#14162B]"
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
                className="w-full resize-none rounded-xl border border-[#DDE1F0] bg-[#F6F7FC] px-4 py-3.5 text-[#14162B] outline-none transition-colors duration-300 placeholder:text-[#6E7391] focus:border-[#2748E0]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#14162B] px-6 py-4 font-medium text-[#F6F7FC] transition-colors duration-300 hover:bg-[#2F5BFF] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#F6F7FC]/30 border-t-[#F6F7FC]" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <FaPaperPlane />
                </>
              )}
            </button>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 rounded-xl border px-4 py-3 text-center text-sm ${
                  status.includes("successfully")
                    ? "border-[#2F5BFF]/30 bg-[#2F5BFF]/5 text-[#2F5BFF]"
                    : "border-red-300 bg-red-50 text-red-600"
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
