import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

const SocialLinks = () => {
  const sociallinks_list = [
    {
      id: 1,
      child: (
        <>
          <b>LinkedIn</b>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/abiy-teklu-889aa01a9",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <b>Github</b>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/abiy5791",
    },
    {
      id: 3,
      child: (
        <>
          <b>Gmail</b>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abte5791@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <b>Telegram</b>
          <BiLogoTelegram size={30} />
        </>
      ),
      href: "https://t.me/ugr19",
    },
    {
      id: 5,
      child: (
        <>
          <b>Phone</b>
          <BsFillTelephoneFill size={30} />
        </>
      ),
      href: "tel:+251930301607",
    },
    {
      id: 6,
      child: (
        <>
          <b>Resume</b>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {sociallinks_list.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800 hover:bg-gradient-to-r from-pink-800 to-blue-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
