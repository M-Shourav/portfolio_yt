import React from "react";
import { profile } from "../../assets/index";
const RightSide = () => {
  return (
    <div className=" flex items-center justify-center relative">
      <img
        src={profile}
        alt="profile"
        className="w-[300px] sm:w-[400px] h-[350px] sm:h-[450px]  z-10"
      />
      <div
        className=" absolute bottom-0 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne
       w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]"
      />
    </div>
  );
};

export default RightSide;
