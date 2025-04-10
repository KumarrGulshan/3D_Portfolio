import emailjs from "@emailjs/browser";
import React, {  useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
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
    
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,  // Service ID
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, // Template ID
      {
        from_name: form.name,
        to_name: "Gulshan",
        from_email: form.email,
        to_email: "ronyahuja806@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY  // Public key (user ID)
    )
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Email sending failed:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
    <section className="relative ml-20 lg:flex-row text-white flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text text-2xl font-bold text-semibold">
          Get in Touch
        </h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className=" font-semibold">Name</label>

          <input
            type="text"
            name="name"
            className="input w-50 bg-emerald-400 text-black rounded-2xl p-2"
            placeholder="John"
            required
            value={form.name}
            onChange={handleChange}
            
          />

          <label className=" font-semibold">E-mail</label>
          <input
            type="email"
            name="email"
            className="input w-50 bg-emerald-400 text-black rounded-2xl p-2 "
            placeholder="John@gmail.com"
            required
            value={form.email}
            onChange={handleChange}
            
          />

          <label className="font-semibold">Message</label>
          <textarea
            type="textarea"
            name="message"
            row={4}
            className="textarea w-80 bg-emerald-400 text-black rounded-2xl  p-2 h-20 "
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
           
          />

          <button
            type="submit"
            className="btn  ml-30 mt-3 bg-emerald-600 w-50 h-10 rounded-2xl  hover:scale-90 transition-all 
            hover:cursor-pointer duration-300 ease-in-out transform"
            disabled={isLoading}
            
          >
            {isLoading ? "Sending.." : "Send message"}
          </button>
        </form>
      </div>
      
    </section>
    <div className="mt-1">
    <div className="ml-170 mr-170 text-2xl  font-semibold text-white">Let's connect</div>
    <div className="mt-5 ml-162 flex flex-row gap-7 text-3xl h-11 w-55 p-2 rounded-2xl bg-emerald-600 mr-162">
    <a href="https://www.linkedin.com/feed/" target="_blank" className="rounded-l-2xl hover:translate-0.5"> <ImLinkedin /> </a>
    <a href="https://github.com/KumarrGulshan" target="_blank" className="rounded-l-2xl hover:translate-0.5"> <FaGithubSquare /> </a>
    <a href="https://www.instagram.com/singh_gulshan__" target="_blank" className="rounded-l-2xl hover:translate-0.5"> <FaInstagram /> </a>
    <a href="https://x.com/singh_gulshan__" target="_blank" className="rounded-l-2xl hover:translate-0.5"> <FaSquareXTwitter /> </a>
  </div>
  </div>
  </>
  );
}

export default Contact;
