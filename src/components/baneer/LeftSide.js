import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaFigma, FaLinkedinIn, FaReact } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Link } from "react-scroll";
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
            <a
              href="https://www.facebook.com/profile.php?id=100027878711748"
              target="blank"
              className="bannerIcon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/MasumAh68543"
              target="blank"
              className="bannerIcon"
            >
              <RiTwitterXFill />
            </a>
          <Link to={'www.linkedin.com/in/masumdev24'} className="bannerIcon">
          <FaLinkedinIn/>
          </Link>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-normal">best skilled on</h2>
          <div className="flex items-center gap-3 py-2">
            <a href="https://react.dev/" target="blank" className="bannerIcon">
              <FaReact />
            </a>
            <a href="https://nextjs.org/" target="blank" className="bannerIcon">
              <SiNextdotjs />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="blank"
              className="bannerIcon"
            >
              <SiTailwindcss />
            </a>
            <a
              href="https://www.figma.com/"
              target="blank"
              className="bannerIcon"
            >
              <FaFigma />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
