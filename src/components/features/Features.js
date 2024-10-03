import React from "react";
import Container from "../Container";
import Title from "../../layout/Title";
import { FeaturesDes } from "../constants/index";
import { FaArrowRight } from "react-icons/fa6";
const Features = () => {
  return (
    <Container
      id="features"
      className="py-20 font-titleFont border border-transparent border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FeaturesDes?.map((item) => (
          <div
            key={item?.title}
            className="w-full h-80 px-12 py-10 border border-green-900 flex items-center rounded-lg shadow-shadowOne group
             hover:bg-gradient-to-b hover:from-black hover:to-[#202327] overflow-hidden duration-200"
          >
            <div className="h-72 overflow-y-hidden">
              <div
                className="flex h-full flex-col gap-6 translate-y-16 sm:translate-y-14 
              hover:translate-y-0 transition-transform duration-500"
              >
                <div>
                  <span className="text-5xl text-designColor">
                    {item?.icons}
                  </span>
                </div>
                <div className="flex flex-col gap-8">
                  <h2 className="text-xl font-semibold">{item?.title}</h2>
                  <p className="text-sm font-semibold">{item?.des}</p>
                  <span className="text-xl text-designColor">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
