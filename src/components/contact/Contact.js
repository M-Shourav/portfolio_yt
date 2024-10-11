import React from "react";
import Container from "../Container";
import Title from "../../layout/Title";
import { contactImg } from "../../assets";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import ContactRight from "./ContactRight";

const Contact = () => {
  return (
    <Container
      className="py-20 font-titleFont border-b-[1px] border-b-black"
      id="contacts"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="contact" des="Contact With Me" />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-10">
        {/* leftSide */}
        <div
          className="w-full lg:w-1/3 shadow-shadowOne bg-bodyColor bg-opacity-30
          px-5 py-5 flex flex-col gap-5 rounded-lg"
        >
          <img
            src={contactImg}
            alt="contactImg"
            className="w-full object-cover rounded-md"
          />
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-3xl font-bold">Masum Ahmed</h1>
            <p className="text-base font-normal text-gray-400">
              MERN Stack Developer
            </p>
            <p className="text-sm">
              Proficient MERN stack developer with a focus on building
              efficient, user-centric web applications. Adept at leveraging
              MongoDB, Express.js, React, and Node.js to deliver cutting-edge
              solutions. Dedicated to continuous improvement and collaborating
              with innovative teams to achieve project goals.
            </p>
            {/* contact */}
            <p className="text-base text-gray-400">
              Phone:{" "}
              <span className="text-white/80 text-base">+8801710267985</span>
            </p>
            <p className="text-base text-gray-400 ">
              E-mail:{" "}
              <span className="text-white/80 text-sm ">
                muhammadshourav625@gmail.com
              </span>
            </p>
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
                <a
                  href="https://www.linkedin.com/in/masumdev24/"
                  target="blank"
                  className="bannerIcon"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* rightSide */}
        <div className="w-full lg:w-2/3 shadow-shadowOne bg-bodyColor bg-opacity-30 rounded-lg px-5 py-10">
          <ContactRight />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
