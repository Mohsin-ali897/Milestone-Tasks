
"use client";
import React, { useState } from "react";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { headerItem } from "../constant/constant";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mldgnaab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatus("Error sending message. Please try again ❌");
      }
    } catch (error) {
      setStatus("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section id={headerItem.contact.page} className="text-white flex flex-col text-center justify-center mt-[100px] items-center px-4">
      <h1 className="text-4xl md:text-6xl my-6 font-bold">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mx-auto max-w-4xl">
        {/* Contact Information */}
        <div>
          <h1 className="text-pink-700 text-3xl font-extrabold">Let&#39;s Talk</h1>
          <p className="text-sm text-gray-300 mt-4">Have a project idea? We'd love to hear about it and help.</p>

          {/* Email */}
          <div className="mt-10 text-center">
            <h2 className="text-gray-300 text-base font-bold">Email</h2>
            <a href="Mailto:mohsinlashari897915@gmail.com" className="text-sm mt-2 inline-block text-gray-300 hover:underline">
              mohsinlashari897915@gmail.com
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-10">
            <h2 className="text-gray-300 text-base font-bold">Socials</h2>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://www.linkedin.com/in/mohsin-ali-8380922b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 hover:bg-gray-500 h-10 w-10 rounded-full flex items-center justify-center">
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a href="https://www.facebook.com/share/194r4qgme1/"
                 target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 hover:bg-gray-500 h-10 w-10 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="https://www.instagram.com/mohsin_42301?igsh=NWFnNWtnNjUyc21j" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-700 hover:bg-gray-500 h-10 w-10 rounded-full flex items-center justify-center">
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm text-white focus:bg-gray-300 focus:text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm text-white focus:bg-gray-300 focus:text-black"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm text-white focus:bg-gray-300 focus:text-black"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 bg-gray-800 text-sm text-white pt-3 focus:bg-gray-300 focus:text-black"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-700 hover:bg-pink-900 text-white py-3 rounded-md tracking-wide transition-transform duration-200 ease-in transform hover:scale-105 disabled:bg-gray-500"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
