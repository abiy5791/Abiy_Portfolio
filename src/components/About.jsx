import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          I'm Abiy Teklu, a Junior Web and Mobile App Developer eager to tackle
          new challenges. Armed with a Bachelor's degree in Computer Science and
          Engineering from Adama Science And Technology University, I've spent
          over a year delving into HTML, CSS, Flutter, React, Laravel,
          Javascript, Python, and WordPress. My passion is crafting engaging
          digital experiences that seamlessly blend design and functionality.
        </p>
        <br />
        <p className="text-xl">
          I'm driven to create innovative solutions with skills spanning
          Flutter, WordPress, React, HTML, and CSS. My projects include QrMenu,
          a dynamic Flutter-based restaurant menu platform with an admin panel
          for easy customization. I've also developed visually appealing,
          responsive WordPress websites, Flutter Mobile apps, and React Websites
          that communicate brands' identities effectively.
        </p>
      </div>
    </div>
  );
};

export default About;
