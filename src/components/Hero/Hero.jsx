import React, { useEffect } from "react";
import homeBG from "../../assets/covers/homeBG.png";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full h-[500px] relative">
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full">
          <div className="absolute bottom-0 lg:left-1/2 transform lg:-translate-x-1/2 flex lg:justify-center justify-evenly items-center">
            <div className="w-[550px] flex flex-col gap-3 ml-10 items-start justify-center">
              <h4 className="leading-4xl lg:leading-[60px] max-md:leading-normal text-4xl lg:text-[52px] max-md:text-[28px] text-white font-bold max-md:w-full">
                Here's your chance to study in the top countries in the world
              </h4>
              <div className="flex gap-3">
                <Link to="/register">
                  <Button subject="Australia" />
                </Link>
                <Link to="/register">
                  <Button subject="USA" />
                </Link>
                <Link to="/register">
                  <Button subject="Canada" />
                </Link>
                <Link to="/register">
                  <Button subject="UK" />
                </Link>
              </div>
            </div>
            <div className="w-[630px] ">
              <div className="relative">
                <img src={homeBG} alt="homeBG" className="" />
                <div className="absolute top-16 left-40 lg:left-48 bg-white w-auto p-1 h-auto rounded-lg shadow-lg text-[#1F0259]">
                  <p className="font-medium">
                    <strong>97%</strong>
                    <br />
                    Visa Success rate
                  </p>
                </div>
                <div className="absolute top-36 right-16 lg:right-0 bg-white w-auto p-1 h-auto rounded-lg shadow-lg text-[#1F0259]">
                  <p className="font-medium">
                    <strong>50%</strong>
                    <br />
                    Student Loan
                  </p>
                </div>
                <div className="absolute bottom-20 left-40 bg-white w-auto p-1 h-auto rounded-lg shadow-lg text-[#1F0259]">
                  <p className="font-medium">
                    <strong>End-to-end</strong>
                    <br />
                    service for free
                  </p>
                </div>
                <div className="absolute bottom-10 right-10 bg-white w-52 p-1 h-auto rounded-lg shadow-lg text-[#1F0259]">
                  <p className="font-medium">
                    <strong>500+ </strong> partner institutions{" "}
                    <strong> 150,000+ </strong> courses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
