"use client";
import React from "react";
import { headerItem, userInfo } from "../constant/constant";
import Image from "next/image";

const About = () => {
  return (
    <section id={headerItem.about.page} className="about-section">
      <div className="about-text">
        <h1 className="about-heading">About</h1>
        <h2 className="about-subheading">Get to know me!</h2>

        <p>
          Hi! I'm <b>Mohsin Ali</b>, a dedicated professional in{" "}
          <b>
            <span className="about-subheading">Full Stack Development</span>
          </b>
          . I specialize in <b>Gen AI, Web Development, and UI/UX Design</b> and
          have a passion for creating projects that make a difference. My
          journey in development has been shaped by my love for innovation,
          problem-solving, and attention to detail.
        </p>

        <p className="mt-4">
          Over the past year, I've honed my skills working on projects ranging
          from <b>CLI Applications</b> like{" "}
          <span className="about-subheading">
            ATM Machine, Student Management System, Word Counter, and Currency
            Converter
          </span>{" "}
          (built using TypeScript) to websites such as{" "}
          <span className="about-subheading">
            Amazon Clone, Gaming Site, Shoes Escape
          </span>
          . I have also developed a{" "}
          <span className="about-subheading">TODO-List</span>, always striving
          to exceed expectations.
        </p>

        <p className="mt-4">
          Whether collaborating with a team or working independently, I take
          pride in delivering high-quality results that reflect both creativity
          and strategic thinking.
        </p>

        <p className="mt-4">
          When I'm not immersed in{" "}
          <b>
            <span className="about-subheading">
              Cloud Native and Generative AI development
            </span>
          </b>
          , I enjoy coding and playing cricket, which keeps my mind fresh and
          inspired for new challenges.
        </p>
      </div>

      <div id={headerItem.skills.page} className="profile-container">
        <Image
          src={userInfo.picture}
          alt="Mohsin Ali's Profile Picture"
          width={300}
          height={300}
          className="profile-picture"
        />

        <h2 className="skills-heading">Skills</h2>
        <div className="skills-container">
          {userInfo.skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
