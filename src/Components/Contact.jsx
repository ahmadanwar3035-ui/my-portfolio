
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
    <section id="contact" className="py-32 bg-[#030712] relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Let's build something amazing together
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8">
              Feel free to contact me for freelance work, collaboration or
              frontend development projects.
            </p>

            <div className="mt-8 space-y-4">
              <p>Email: ahmadanwar3035@gmail.com</p>
              <p>Location: Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-4 mb-4 rounded-xl bg-[#0B1120] text-white outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-4 mb-4 rounded-xl bg-[#0B1120] text-white outline-none"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              required
              className="w-full p-4 rounded-xl bg-[#0B1120] text-white outline-none"
            />

            <button
              type="submit"
              disabled={status === "Sending..."}
              className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium transition hover:scale-105 disabled:opacity-50"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="mt-4 text-gray-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

