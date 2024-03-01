import { Link } from "react-router-dom";
import React from "react";
import videoBg from "../../assets/video/bgvideo.mp4";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";

const Video = () => {
  return (
    <>
      <div className="h-[530px] lg:h-[730px] relative">

        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="brightness-50 z-[-10] absolute top-0 left-0 w-full md:w-screen h-full object-cover"
        />
        <div className="flex flex-col gap-4 w-full max-md:w-[340px] items-center justify-center max-md:pt-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h4 className="text-4xl max-md:text-[48px] lg:text-6xl max-md:leading-[65px] capitalize text-white font-semibold">
            your study abroad journey, simplified
          </h4>

          <div className="">
            <Link to="/register">
              <p className="bg-[#000080] w-[170px] lg:w-[280px] rounded-full p-3 lg:py-8 lg:px-8 font-bold text-[16px] lg:text-2xl text-white">
                Register for FREE
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Intro />
    </>
  );
};

export default Video;
