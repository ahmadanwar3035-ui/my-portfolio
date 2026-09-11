
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_93501mg",
        "template_enmou68",
        form.current,
        {
          publicKey: "13hszCGnVOGZrA0h4",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-[#030712]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Contact Me
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-4">
            Let's build something amazing together
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

          {/* Contact Info */}
          <div className="w-full min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-5 sm:mb-6">
              Get In Touch
            </h3>

            <p className="text-sm sm:text-base text-gray-400 leading-7 sm:leading-8">
              Feel free to contact me for freelance work, collaboration or
              frontend development projects.
            </p>

            <div className="mt-7 sm:mt-8 space-y-4 text-sm sm:text-base">
              <div className="break-words">
                <span className="text-gray-500">Email:</span>{" "}
                <span className="text-white">
                  ahmadanwar3035@gmail.com
                </span>
              </div>

              <div>
                <span className="text-gray-500">Location:</span>{" "}
                <span className="text-white">Pakistan</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full min-w-0 bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-3xl"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full min-w-0 p-3.5 sm:p-4 mb-4 rounded-xl bg-[#0B1120] text-white text-sm sm:text-base outline-none border border-transparent focus:border-cyan-500/50 transition"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full min-w-0 p-3.5 sm:p-4 mb-4 rounded-xl bg-[#0B1120] text-white text-sm sm:text-base outline-none border border-transparent focus:border-cyan-500/50 transition"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              required
              className="w-full min-w-0 p-3.5 sm:p-4 rounded-xl bg-[#0B1120] text-white text-sm sm:text-base outline-none border border-transparent focus:border-cyan-500/50 transition resize-none"
            />

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full sm:w-auto mt-5 sm:mt-6 px-7 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm sm:text-base font-medium transition hover:scale-[1.02] sm:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-4 text-sm sm:text-base text-gray-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

