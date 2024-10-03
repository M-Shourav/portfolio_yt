import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaFigma, FaLinkedinIn, FaReact } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
const LeftSide = () => {
  const [text] = useTypewriter({
    words: ["Professional coder.", "Front-end developer.", "UI Designer."],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full flex flex-col gap-20">
      <div className=" flex flex-col items-start gap-3 font-titleFont">
        <h4 className="text-lg font-normal tracking-wide">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-3xl sm:text-5xl font-bold flex items-center gap-1">
          Hi,I'm <span className="text-designColor font-bold">Masum Ahmed</span>
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold">
          a <span className="text-2xl sm:text-4xl">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-normal">
          I am a MERN Stack developer with 1+ years of experience in javaScript
          and React. I have a strong foundation in front-end and am skill in
          creating user-friendly and responsive web application using React and
          it's ecosystem
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <h2 className="text-base uppercase font-normal">Find me in </h2>
          <div className="flex items-center gap-3 py-2">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <RiTwitterXFill />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-normal">best skilled on</h2>
          <div className="flex items-center gap-3 py-2">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
