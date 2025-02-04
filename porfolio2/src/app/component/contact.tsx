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
    <section id={headerItem.contact.page} className="contact-section">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-container">
        {/* Contact Information */}
        <div>
          <h1 className="contact-info-title">Let&#39;s Talk</h1>
          <p className="contact-text">Have a project idea? We'd love to hear about it and help.</p>

          {/* Email */}
          <div className="contact-email">
            <h2 className="contact-text">Email</h2>
            <a href="Mailto:mohsinlashari897915@gmail.com">mohsinlashari897915@gmail.com</a>
          </div>

          {/* Social Media Links */}
          <div className="contact-socials">
            <h2 className="contact-text">Socials</h2>
            <div className="contact-social-links">
              <a
                href="https://www.linkedin.com/in/mohsin-ali-8380922b7"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a
                href="https://www.facebook.com/share/194r4qgme1/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                href="https://www.instagram.com/mohsin_42301"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="contact-input"
          ></textarea>
          <button type="submit" disabled={loading} className="contact-button">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
