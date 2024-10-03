import React from "react";
import Container from "../Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
const Banner = () => {
  return (
    <Container
      id="home"
      className="py-10 lg:py-16 flex flex-col lg:flex-row items-start justify-between gap-5"
    >
      <div className="w-full lg:w-1/2">
        <LeftSide />
      </div>
      <div className="w-full lg:w-1/2">
        <RightSide />
      </div>
    </Container>
  );
};

export default Banner;
