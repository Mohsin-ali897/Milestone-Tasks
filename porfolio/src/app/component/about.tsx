
"use client";
import React from "react";
import { headerItem, userInfo } from "../constant/constant";
import Image from "next/image";

const About = () => {
  return (
    <section
    id={headerItem.about.page}
    className="text-white min-h-screen flex flex-col-reverse text-center justify-center items-center md:flex-row md:text-start pt-10 px-6 md:px-20">
      <div className="m-4 md:w-1/2">
        <h1 className="text-6xl my-6 font-bold">About</h1>
        <h2 className="text-3xl my-4 text-pink-700">Get to know me!</h2>

        <p>
          Hi! I'm <b>Mohsin Ali</b>, a dedicated professional in{" "}
          <b>
            <span className="text-pink-700">Full Stack Development</span>
          </b>
          . I specialize in <b>Gen AI, Web Development, and UI/UX Design</b> and
          have a passion for creating projects that make a difference. My
          journey in development has been shaped by my love for innovation,
          problem-solving, and attention to detail.
        </p>

        <p className="mt-4">
          Over the past year, I've honed my skills working on projects ranging
          from <b>CLI Applications</b> like{" "}
          <span className="text-pink-600 font-semibold">
            ATM Machine, Student Management System, Word Counter, and Currency
            Converter
          </span>{" "}
          (built using TypeScript) to websites such as{" "}
          <span className="text-pink-600 font-semibold">
            Amazon Clone, Gaming Site, Shoes Escape
          </span>
          . I have also developed a{" "}
          <span className="text-pink-600 font-semibold">TODO-List</span>, always
          striving to exceed expectations.
        </p>

        <p className="mt-4">
          Whether collaborating with a team or working independently, I take
          pride in delivering high-quality results that reflect both creativity
          and strategic thinking.
        </p>

        <p className="mt-4">
          When I'm not immersed in{" "}
          <b>
            <span className="text-pink-700">
              Cloud Native and Generative AI development
            </span>
          </b>
          , I enjoy coding and playing cricket, which keeps my mind fresh and
          inspired for new challenges.
        </p>
      </div>

      <div
        id={headerItem.skills.page}
        className="flex flex-col justify-center items-center text-center"
      >
        <Image
          src={userInfo.picture}
          alt="Mohsin Ali's Profile Picture"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />

        <h2 className="text-3xl my-4 font-bold">Skills</h2>
        <div className="mt-3 w-3/4 flex flex-wrap justify-center">
          {userInfo.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-pink-500 m-1 p-2 text-sm text-black font-bold rounded-md
                hover:bg-gray-400 cursor-pointer transition-transform duration-200 ease-in transform hover:scale-110"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

