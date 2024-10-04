import React, { useState } from "react";
import Container from "../Container";
import Title from "../../layout/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);

  return (
    <Container
      id="resume"
      className="py-20 font-titleFont border border-transparent border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="Fresher" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2">
          <li
            onClick={() => setEducationData(true) & setSkillsData(false)}
            className={`${
              educationData ? "border-designColor" : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => setEducationData(false) & setSkillsData(true)}
            className={`${
              skillsData ? "border-designColor" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillsData && <Skills />}
    </Container>
  );
};

export default Resume;
