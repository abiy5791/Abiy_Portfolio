import React from "react";
import { TbArrowRightCircle } from "react-icons/tb";
import heroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full dark:bg-gradient-to-b from-black via-black to-gray-800 bg-slate-100 text-zinc-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold dark:text-white">
            I'm Web And Mobile App Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md px-1">
            I'm a junior full stack developer ready for a new challenge as a web
            and app developer. With over a year of experience in HTML, CSS,
            Flutter, React, Laravel and WordPress.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group hover:text-black hover:duration-500 font-bold text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <TbArrowRightCircle size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
