import React from "react";
import flutter from "../assets/experience/flutter.png";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import bootstrap from "../assets/experience/bootstrap.png";
import firebase from "../assets/experience/firebase.png";
import github from "../assets/experience/github.png";
import javascript from "../assets/experience/javascript.png";
import python from "../assets/experience/python.png";
import react from "../assets/experience/react.png";
import wordpress from "../assets/experience/wordpress.png";
import laravel from "../assets/experience/laravel.png";
import tailwind from "../assets/experience/tailwind.png";

const Experience = () => {
  const myExperiences = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
    {
      id: 5,
      src: flutter,
      title: "FLUTTER",
      style: "shadow-cyan-500",
    },

    {
      id: 6,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-600",
    },
    {
      id: 7,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-300",
    },

    {
      id: 9,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-yellow-400",
    },
    {
      id: 10,
      src: laravel,
      title: "LARAVEL",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: wordpress,
      title: "WORDPRESS",
      style: "shadow-indigo-400",
    },

    {
      id: 12,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="experience"
      className="dark:bg-gradient-to-b from-gray-800 to-black w-full sm:h-screen bg-slate-100"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="pt-4">These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-2 px-2 sm:px-0 h-fit">
          {myExperiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg cursor-pointer ${style}`}
            >
              <img src={src} className="w-20 mx-auto" />
              <p className="mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
