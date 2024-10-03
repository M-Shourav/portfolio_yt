import React from "react";
import Container from "../Container";
import Title from "../../layout/Title";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <Container
      id="resume"
      className="py-20 font-titleFont border border-transparent border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      <div className="py-10 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
        <h2 className="text-4xl font-semibold">Education Quality</h2>
      </div>
    </Container>
  );
};

export default Resume;
