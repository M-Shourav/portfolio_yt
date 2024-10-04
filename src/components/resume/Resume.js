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
        <Title title="Fresher" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-10">
        <div>
          <div className="py-10 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
            <h2 className="text-4xl font-semibold">Education Quality</h2>
          </div>
          <div className="mt-10 w-full h-[700px] border-l-[6px] border-l-black flex flex-col gap-10">
            <ResumeCard
              title="Diploma In Computer Engineer"
              subtitle="Dinajpur Polytechnic Institute (2020-2024)"
              result="3.81/4"
              des="The training provided by Bangladesh Technical Education Board (BTEB) in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              title="Secondary School Education"
              subtitle="Chilahati Merchant's High School (2018-2020)"
              result="4.72/5"
              des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
            />
          </div>
        </div>
        <div>
          <div className="py-10 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              06/2024-09/2024
            </p>
            <h2 className="text-4xl font-semibold">Industrial Training</h2>
          </div>
          <div className="mt-10 w-full h-[350px] border-l-[6px] border-l-black flex flex-col gap-10">
            <ResumeCard
              title="MERN Stack Development"
              subtitle="PeopleNTech It Training Center"
              result="Dhaka"
              des="Passionate and skilled MERN stack developer with a
              strong foundation in MongoDB, Express.js, React, and Node.js."
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Resume;
