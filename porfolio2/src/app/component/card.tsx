import React from "react";
import Image from "next/image";

interface PropsType {
  title: string;
  desc: string;
  img: any;
  tags: Array<string>;
  url: string;
}

const Cards: React.FC<PropsType> = ({ title, desc, img, tags, url }) => {
  return (
    <div className="card" data-aos="zoom-in-up">
      <div data-aos="flip-left">
        <Image className="card-image" src={img} alt={title} data-aos="flip-left" />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <div className="tag" key={el}>
              {el}
            </div>
          ))}
        </div>
        <div>
          <a href={url} target="_blank">
            <button className="card-button">View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
