import React from "react";
import { twMerge } from "tailwind-merge";
const Container = ({ children, className, id }) => {
  return (
    <div
      className={twMerge("max-w-[1180px] mx-auto px-4 lg:px-0", className, id)}
    >
      {children}
    </div>
  );
};

export default Container;
