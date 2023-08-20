import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  const [navstate, setNavstate] = useState(false);
  const NavItems = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },

    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-15 px-4 bg-slate-100 fixed dark:bg-black dark:text-white">
      <div>
        <Link to="home" smooth duration={500}>
          <h1 className="text-4xl font-signature ml-2 mt-2 cursor-pointer">
            Abiy
          </h1>
        </Link>
      </div>

      <DarkModeToggle />
      <ul className="hidden md:flex">
        {NavItems.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium dark:text-gray-300 hover:scale-110 duration-200 hover:text-blue-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNavstate(!navstate)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navstate ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navstate && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark:bg-gradient-to-b from-black to-gray-800 dark:text-gray-500 bg-slate-100 text-zinc-900">
          {NavItems.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-3 text-2xl"
            >
              <Link
                onClick={() => {
                  setNavstate(!navstate);
                }}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
