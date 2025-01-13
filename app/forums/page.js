import React from "react";
import Image from "next/image";
const topics = [
  {
    text: "javascript",
    img: "/js.png",
    description: "Discuss anything about JavaScript",
  },
  {
    text: "HTML & CSS",
    img: "/html.png",
    description: "Build the foundation of web pages with structure and style",
  },
  {
    text: "React",
    img: "/react.png",
    description: "Create interactive and reusable UI components",
  },
  {
    text: "Git",
    img: "/git.png",
    description: "Version control system for collaborative development",
  },
  {
    text: "Web APIs",
    img: "/api.png",
    description: "Interact with web services and functionalities",
  },
];
const forums = () => {
  return (
    <div className="container bg-red-500 mx-auto my-24">
      <h1>Discussion Forums</h1>
      <div className="flex flex-wrap">
        {topics.map((topic) => {
          return (
            <div
              key={topic.img}
              className="shadow-lg bg-slate-500 w-1/4 p-3 m-4 flex flex-col items-center justify-center"
            >
              <Image
                src={topic.img}
                alt="topic"
                width={34}
                height={34}
                className=""
              ></Image>
              <h2>{topic.text}</h2>
              <p>{topic.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default forums;
