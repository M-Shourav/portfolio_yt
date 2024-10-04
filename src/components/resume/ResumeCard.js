import React from "react";

const ResumeCard = ({ title, subtitle, result, des }) => {
  return (
    <div className="w-full h-full group flex">
      <div className="w-10 h-[6px] bg-black mt-16 relative">
        <span className="w-5 h-5 bg-black rounded-full absolute -top-2 -left-3 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300" />
        </span>
      </div>
      <div
        className="w-full bg-black bg-opacity-20 group-hover:bg-opacity-30  rounded-lg duration-300 px-10 flex
       flex-col justify-center gap-10 shadow-shadowOne"
      >
        <div>
          <h1 className="text-sm sm:text-2xl  sm:font-semibold">{title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
            <p className="text-xs sm:text-base ">{subtitle}</p>
            <p
              className="w-20 h-10 text-designColor bg-black flex items-center 
            justify-center text-sm font-semibold rounded-lg shadow-shadowOne"
            >
              {result}
            </p>
          </div>
          <p className="text-sm font-semibold mt-10">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
