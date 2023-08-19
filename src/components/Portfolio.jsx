import React from "react";
import qrmenu from "../assets/portfolio/menu.png";
import texttospeech from "../assets/portfolio/text_to_speech.png";
import randompassword from "../assets/portfolio/randompassword.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: qrmenu,
      demo_href: "https://mafimenu-f9eb6.web.app/",
      code_href: "https://github.com/abiy5791/QrMenu",
    },
    {
      id: 2,
      src: texttospeech,
      demo_href: "https://abiy5791.github.io/Text-to-Speech-convertor/",
      code_href: "https://github.com/abiy5791/Text-to-Speech-convertor",
    },
    {
      id: 3,
      src: randompassword,
      demo_href: "https://abiy5791.github.io/Random-Password-Generator/",
      code_href: "https://github.com/abiy5791/Random-Password-Generator",
    },
  ];
  return (
    <div
      name="portfolio"
      className="sm:h-screen dark:bg-gradient-to-b from-black to-gray-800 w-full dark:text-white md:h-screen bg-slate-100"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-8">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {portfolios.map(({ id, src, demo_href, code_href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-500 hover:scale-105 cursor-pointer"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 hover:text-cyan-300 font-bold">
                  <a href={demo_href} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 font-bold hover:text-cyan-300">
                  <a href={code_href} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
