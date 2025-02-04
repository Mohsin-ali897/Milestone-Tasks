
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
    <div className="text-white min-h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center md:gap-28  text-center md:text-left px-6 md:px-20">
      {/* Text Section */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <h1
          className="text-3xl md:text-6xl uppercase text-pink-700 font-bold"
          data-aos="fade-right"
        >
          Full Stack Developer
        </h1>

        <h1 className="text-xl md:text-2xl mt-4">
          Hello, I'm{" "}
          <span ref={el} className="text-pink-700 text-2xl md:text-3xl"></span>
        </h1>

        <p className="mt-4 mb-6 leading-relaxed text-gray-300">
          I'm a student passionate about{" "}
          <span className="font-bold text-pink-700">
            Front-end and Back-end development
          </span>
          . As part of the{" "}
          <span className="font-bold text-pink-700">
            Governor's Initiative for Generative AI
          </span>{" "}
          and the{" "}
          <span className="font-bold text-pink-700">
            Presidential Initiative for Cloud Native AI
          </span>
          , I'm learning the latest technologies. I have experience with{" "}
          <span className="text-pink-700 font-semibold">HTML</span>,{" "}
          <span className="text-pink-700 font-semibold">CSS</span>,{" "}
          <span className="text-pink-700 font-semibold">JavaScript</span>,{" "}
          <span className="text-pink-700 font-semibold">TypeScript</span>,{" "}
          <span className="text-pink-700 font-semibold">Python</span>,{" "}
          <span className="text-pink-700 font-semibold">Next.js</span>,{" "}
          <span className="text-pink-700 font-semibold">React</span>, and{" "}
          <span className="text-pink-700 font-semibold">Tailwind CSS</span>.
        </p>

        <button
          className="w-32 h-12 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-transform duration-200 ease-in transform hover:scale-105"
          onClick={handleShowResume}
        >
          View Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center md:justify-end mt-10 md:mt-0">
        <Image
          src={mypic}
          alt="My Portfolio Picture"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          width={300}
          height={300}
          className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] shadow-2xl rounded-full"
        />
      </div>
    </div>
  );
}
