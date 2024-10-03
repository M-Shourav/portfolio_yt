import React from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ title, des, className }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-2 mb-10", className)}>
      <h3 className="text-sm sm:text-lg font-normal text-designColor uppercase">
        {title}
      </h3>
      <h1 className="text-5xl text-white font-semibold">{des}</h1>
    </div>
  );
};

export default Title;
