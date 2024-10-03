import React from "react";
import { logo } from "../../assets/index";
import { navLinks } from "../constants/index";
import { Link } from "react-scroll";
import Container from "../Container";
const Header = () => {
  return (
    <div className="w-full h-24 py-2 bg-bodyColor text-lightText border-b-[1px] border-b-gray-600 font-titleFont sticky top-0 z-50">
      <Container className=" flex items-center justify-between gap-7">
        <div className=" flex items-center gap-1">
          <img
            src={logo}
            alt="logo"
            className="w-16  h-16 object-cover border-2 border-gray-400 rounded-full"
          />
          <p className="text-xl font-semibold">MASUM</p>
        </div>
        <div className=" hidden md:inline-flex">
          <ul className="flex items-center gap-7">
            {navLinks?.map((item) => (
              <li
                className="text-sm font-semibold cursor-pointer hover:text-designColor duration-300"
                key={item?._id}
              >
                <Link
                  activeClass="active"
                  to={item?.link}
                  smooth={true}
                  spy={true}
                  duration={800}
                  offset={-70}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
