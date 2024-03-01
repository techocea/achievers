import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { BsFillHouseDoorFill, BsFillAirplaneFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
const Intro = () => {
  return (
    <div className="bg-black h-[70px] max-md:h-full lg:h-[150px] w-full flex items-center justify-center ">
      <div className="flex max-md:flex-col items-center justify-around w-full max-md:gap-7 max-md:py-10">
        <div className="max-md:w-full">
          <p className="text-white lg:text-2xl gap-2  max-md:text-xl flex items-center max-md:flex-col">
            <BiDollarCircle size={35} />
            Financial Support
          </p>
        </div>
        <div className="max-md:w-full">
          <p className="text-white lg:text-2xl gap-2  max-md:text-xl flex items-center max-md:flex-col">
            <FaUniversity size={35} />
            World Class Universities
          </p>
        </div>
        <div className="max-md:w-full">
          <p className="text-white lg:text-2xl gap-2  max-md:text-xl flex items-center max-md:flex-col">
            <BsFillHouseDoorFill size={35} />
            University Accomodation
          </p>
        </div>
        <div className="max-md:w-full">
          <p className="text-white lg:text-2xl gap-2  max-md:text-xl flex items-center max-md:flex-col">
            <BsFillAirplaneFill size={35} />
            Air Ticketing
          </p>
        </div>
        <div className="max-md:w-full">
          <p className="text-white lg:text-2xl gap-2  max-md:text-xl flex items-center max-md:flex-col">
            <TiDocumentText size={35} />
            IELTS & PTE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
