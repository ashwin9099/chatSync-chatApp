import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const topics = [
  {
    text: "Java",
    img: "/java.webp",
    description: "Discuss anything about Java!",
    slug: "java",
  },
  {
    text: "Python",
    img: "/python.png",
    description: "Build the foundation of machine learning models",
    slug: "python",
  },
  {
    text: "JavaScript",
    img: "/javascript.png",
    description: "Learn and discuss about JavaScript frameworks",
    slug: "js",
  },
  {
    text: "React",
    img: "/react.svg",
    description: "Discuss about React and its reusable components",
    slug: "react",
  },
  {
    text: "Spring",
    img: "/spring.png",
    description:
      "Level up your Java code and explore what Spring can do for you.",
    slug: "spring",
  },
  {
    text: "Git",
    img: "/git.png",
    description: "Interact on version control and code management",
    slug: "git",
  },
];
const forums = () => {
  return (
    <div className="mx-auto my-20">
      <h1 className="text-center text-3xl font-bold font-mono p-5">
        Discussion Forums
      </h1>
      <div className="flex flex-wrap justify-center">
        {topics.map((topic) => {
          return (
            <div
              key={topic.img}
              className="shadow-xl rounded-lg bg-slate-100 w-1/4 px-4 py-10 m-5 flex flex-col items-center justify-center"
            >
              <Image
                src={topic.img}
                alt="topic"
                width={50}
                height={50}
                className="rounded-full object-cover border-2"
              ></Image>
              <h2 className="text-xl p-2">{topic.text}</h2>
              <p className="text text-sm p-2">{topic.description}</p>
              <Link href={`/forum/${topic.slug}`}>
                <Button className="mt-4">Discuss Now</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default forums;
