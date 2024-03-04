import React from "react";
import serv from "../../assets/services.jpg";

const Services = () => {
  return (
    <>
      <div className="h-[500px] relative max-md:w-full ">
        <img
          src={serv}
          alt="serv"
          className="brightness-50 z-[-10] absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 max-md:bottom-6 items-center flex flex-col max-md:p-5">
          <div className="flex flex-col gap-3 text-center">
            <h4 className="leading-[46px] max-md:leading-normal text-[32px] lg:text-4xl max-md:text-[28px] text-white font-bold flex-wrap max-md:w-full text-center">
              Providing you the pathway to excellence
            </h4>
            <p className="text-white font-medium text-lg">
              Empower yourself with a seamless shift from school to university
              through our dedicated overseas education counseling.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
//FaUniversity
//FaPassport
//BiSolidPlane
//FaFileAlt
//MdOutlineAirplaneTicket
//FaCarSide
//ImHome
