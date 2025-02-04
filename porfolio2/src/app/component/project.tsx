"use client";
import React from "react";
import { headerItem } from "../constant/constant";
import { data } from "../constant/constant";
import Heading from "../component/heading";
import Cards from "../component/card";

const Projects: React.FC = () => {
  return (
    <section id={headerItem.projects.page} className="projects-section">
      <div>
        <Heading title="Projects" />
        <div className="projects-grid">
          {data.map((el) => (
            <Cards
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.image}
              tags={el.tags}
              url={el.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
