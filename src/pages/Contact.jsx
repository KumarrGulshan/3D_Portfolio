import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setform] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gulshan",
          from_email: form.email,
          to_email: "ronyahuja806@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        alert("Message sent successfully!");
        setform({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row text-white px-4 sm:px-10 md:px-14 lg:px-20 xl:px-32 py-10 gap-10 max-container">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4">Get in Touch</h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="font-semibold text-base sm:text-lg md:text-lg">Name</label>
            <input
              type="text"
              name="name"
              className="bg-emerald-400 w-full max-w-sm text-black rounded-2xl p-3 text-base"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />

            <label className="font-semibold text-base sm:text-lg md:text-lg">E-mail</label>
            <input
              type="email"
              name="email"
              className="bg-emerald-400 w-full max-w-sm text-black rounded-2xl p-3 text-base"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />

            <label className="font-semibold text-base w-60  sm:text-lg md:text-lg">Message</label>
            <textarea
              name="message"
              rows={5}
              className="bg-emerald-400 w-full h-18 max-w-lg text-black rounded-2xl p-3 text-base"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-emerald-600 hover:bg-violet-600 w-48 rounded-2xl px-5 py-2 text-white font-semibold hover:scale-95 transition-all duration-300 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>

      <div className="px-4 sm:px-10 md:px-14 lg:px-20 xl:px-32 flex flex-col items-start sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-white">Let's connect</h2>
        <div className="flex gap-5 text-3xl bg-emerald-600 rounded-2xl px-6 py-3">
          <a href="https://www.linkedin.com/feed/" target="_blank" className="hover:scale-110 transition-transform">
            <ImLinkedin />
          </a>
          <a href="https://github.com/KumarrGulshan" target="_blank" className="hover:scale-110 transition-transform">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/singh_gulshan__" target="_blank" className="hover:scale-110 transition-transform">
            <FaInstagram />
          </a>
          <a href="https://x.com/singh_gulshan__" target="_blank" className="hover:scale-110 transition-transform">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </>
  );
}


export default Contact;
