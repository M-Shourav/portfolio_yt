import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "../constants/index";
import { Link } from "react-scroll";
const MobileNavigation = () => {
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <>
      <div
        onClick={toggleMenu}
        className="text-3xl lg:hidden hover:text-designColor duration-200 cursor-pointer"
      >
        <CiMenuFries />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 w-screen p-4 flex items-center justify-center bg-black/50 ">
          <DialogPanel
            transition
            className="w-[90%] bg-black text-themeWhite space-y-4 p-6 border
           border-lightBg/40 rounded-md absolute top-10 mt-5"
          >
            <div className="flex items-center justify-between gap-5">
              <h3 className="text-xl font-semibold text-white/80">
                Navigation Menu
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white/80 hover:text-red-500 border
             border-white/80 hover:border-white/60 duration-300 rounded-sm"
              >
                <IoCloseOutline />
              </button>
            </div>
            <div className="flex flex-col items-start text-start text-white gap-5 pt-5">
              <ul className="flex flex-col items-center gap-7">
                {navLinks?.map((item) => (
                  <li
                    className="text-sm font-semibold cursor-pointer hover:text-designColor duration-300"
                    key={item?._id}
                  >
                    <Link
                      activeClass="active"
                      to={item?.link}
                      onClick={() => setIsOpen(false)}
                      smooth={true}
                      spy={true}
                      duration={800}
                      offset={-70}
                      className="hover:text-designColor w-full duration-200  relative group flex items-center gap-2"
                    >
                      <span className="w-2.5 h-2.5 inline-flex rounded-full border border-white group-hover:border-designColor" />
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
