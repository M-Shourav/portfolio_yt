import React from "react";
import Container from "../Container";
import Title from "../../layout/Title";
import { projectArray } from "../constants";
const Projects = () => {
  return (
    <Container
      className="py-20 font-titleFont border border-transparent border-b-black"
      id="project"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="visits my portfolio and keep your feedback"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectArray?.map((item) => (
          <div
            key={item?._id}
            className="w-full  p-5 bg-gradient-to-r border border-green-900 rounded-lg shadow-shadowOne group
             hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 overflow-hidden duration-300 transition-colors
              flex flex-col gap-7 "
          >
            <div className="w-full h-52 overflow-hiddenborder-2  rounded-lg">
              <a href={item?.link} target="blank">
                <img
                  src={item?.images}
                  alt="project_image"
                  className="w-full h-full group-hover:scale-110 duration-200 p-6 sm:p-4 cursor-pointer"
                />
              </a>
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-base text-designColor font-normal ">
                {item?.title}
              </h2>
              <div className="flex items-center gap-3">
                <a
                  href={item?.gitlinks}
                  target="blank"
                  className="w-10 h-10 text-2xl hover:text-designColor duration-200 flex items-center justify-center rounded-full bg-black"
                >
                  {item?.icons_1}
                </a>
                <a
                  href={item?.link}
                  target="blank"
                  className="w-10 h-10 text-2xl hover:text-designColor duration-200 flex items-center justify-center rounded-full bg-black"
                >
                  {item?.icons_2}
                </a>
              </div>
            </div>
            <p>{item?.des}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
