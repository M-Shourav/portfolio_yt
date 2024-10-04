import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="w-full flex flex-col sm:flex-row gap-16"
    >
      {/* design skill start */}
      <div className="w-full sm:w-1/2">
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Fetures</p>
          <h2 className="text-4xl font-semibold">Design Skill</h2>
        </div>
        <div className="mt-10 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe Photoshop</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Figma</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">50%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Canva</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">design</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      {/* design skill end */}
      {/* development skill start */}
      <div className="w-full sm:w-1/2">
        <div className="py-10 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Fetures</p>
          <h2 className="text-4xl font-semibold">Development Skill</h2>
        </div>
        <div className="mt-10 w-full flex flex-col gap-6">
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">React</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">html</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">95%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Css3</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Tailwind Css</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className=" overflow-x-hidden">
            <p className="text-sm uppercase font-medium">javascript</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500
               to-red-600 rounded-md relative"
              >
                <span className=" absolute -top-7 right-0">75%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      {/* development skill end */}
    </motion.div>
  );
};

export default Skills;
