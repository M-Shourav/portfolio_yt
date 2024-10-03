import React from "react";
import Container from "../Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Banner = () => {
  return (
    <Container
      id="home"
      className="py-10 lg:py-16 flex flex-col md:flex-row items-start sm:items-center justify-between gap-5"
    >
      <div className="w-full sm:w-1/2">
        <LeftSide />
      </div>
      <div className="w-full sm:w-1/2">
        <RightSide />
      </div>
    </Container>
  );
};

export default Banner;
