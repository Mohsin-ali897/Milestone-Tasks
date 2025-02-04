"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import mypic from "../assets/porfolio.jpg";
import Typed from "typed.js";

export default function Intro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Mohsin Ali", "Web Developer", "React Developer"],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const handleShowResume = () => {
    window.open("/CV.pdf", "_blank");
  };

  return (
    <div className="intro-container">
      {/* Text Section */}
      <div className="intro-text">
        <h1 className="intro-title" data-aos="fade-right">
          Full Stack Developer
        </h1>

        <h1 className="intro-subtitle">
          Hello, I'm <span ref={el} className="intro-highlight"></span>
        </h1>

        <p className="intro-description">
          I'm a student passionate about{" "}
          <span className="intro-highlight">Front-end and Back-end development</span>.
          As part of the{" "}
          <span className="intro-highlight">Governor's Initiative for Generative AI</span> and the{" "}
          <span className="intro-highlight">Presidential Initiative for Cloud Native AI</span>,
          I'm learning the latest technologies. I have experience with{" "}
          <span className="intro-highlight">HTML</span>,{" "}
          <span className="intro-highlight">CSS</span>,{" "}
          <span className="intro-highlight">JavaScript</span>,{" "}
          <span className="intro-highlight">TypeScript</span>,{" "}
          <span className="intro-highlight">Python</span>,{" "}
          <span className="intro-highlight">Next.js</span>,{" "}
          <span className="intro-highlight">React</span>, and{" "}
          <span className="intro-highlight">Tailwind CSS</span>.
        </p>

        <button className="resume-button" onClick={handleShowResume}>
          View Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="intro-image-container">
        <Image
          src={mypic}
          alt="My Portfolio Picture"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          width={300}
          height={300}
          className="intro-image"
        />
      </div>
    </div>
  );
}
