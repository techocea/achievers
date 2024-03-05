import React, { useEffect } from "react";


import WhatsAppChatButton from "../WhatsappChat/WhatsappChat";
import { Link } from "react-router-dom";
import { Universities } from "../../data"
import Button from "../../button/Button";
const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
<div className="w-full h-[500px] relative max-md:w-full">
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full"></div>
        <div className=" absolute left-10 top-1/3  max-md:bottom-6 items-center flex justify-between w-auto max-md:p-5">
          <div className="flex flex-col gap-3 text-left">
          <h4 className="leading-[60px] w-[650px] max-md:leading-normal text-[52px] max-md:text-[28px] text-white font-bold flex-wrap max-md:w-full ">
            Here`s your chance to study in the top countries in the world 
          </h4>
          <div className="flex gap-3">
            <Button subject="Australia"/>
            <Button subject="USA"/>
            <Button subject="Canada"/>
            <Button subject="UK"/>
          </div>
        </div>
          <div className="w-auto relative">
            {/* img0 */}
            <div className="bg-white shadow-lg w-auto text-black p-1.5">
              <p><strong>97%</strong>Visa Success rate</p>
            </div>
            <div className="bg-white shadow-lg w-auto text-black p-1.5">
              <p><strong>97%</strong>Visa Success rate</p>
            </div>
            <div className="bg-white shadow-lg w-auto text-black p-1.5">
              <p><strong>97%</strong>Visa Success rate</p>
            </div>
            <div className="bg-white shadow-lg w-auto text-black p-1.5">
              <p><strong>97%</strong>Visa Success rate</p>
            </div>
            </div>  
           </div>
      </div>
     
      <main className="h-full w-full max-md:w-screen bg-white py-20 flex flex-col max-md:flex-col  ">
        <h2 className="text-center max-md:text-left pb-8 font-bold text-3xl">
          EXPLORE UNIVERSITIES AROUND THE GLOBE
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full max-md:w-screen h-full max-md:px-0 justify-center items-center">
            <h2 className="font-normal text-3xl pb-6 text-center max-md:text-xl">
              Your next &nbsp;
              <span className="text-teal-500 font-bold">destination</span>
              &nbsp;would be..
            </h2>
            {/* //// */}
          </div>
        </div>
      </main>
      <main className="bg-white">
        <h1 className="max-md:px-3 lg:text-4xl text-center max-md:text-left pb-8 font-bold text-3xl uppercase">Universities which we are partnered with</h1>
        <p className="max-md:px-3 lg:text-2xl text-xl text-gray-400 capitalize text-center">...join with us and get the chance to study in one of the best universities in the world</p>
        <div className="grid grid-cols-4 max-md:grid-cols-2  gap-4 max-md:gap-0 mt-8">
          {Universities.map((university) => (
            <div key={university.id} className="flex justify-center items-center">
              <a
                href={university.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden rounded-lg w-48 max-md:w-32 h-40"
              >
                <img
                  src={university.imageUrl}
                  alt={university.name}
                  className="object-contain w-full h-full transition-transform duration-300 transform hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </main>
      <main className="h-full py-20 bg-[#F5F4FF]">
        <h2 className="font-bold text-4xl max-md:text-2xl text-center pb-10">
          BOOK YOUR <span className="text-[#2c9db6] px-[5px]">FREE </span>
          CONSULTATION NOW
        </h2>
        <div className="flex max-md:flex-col justify-center items-center gap-[50px] lg:gap-[75px] mx-[5rem] max-md:mx-10">
         
          <div className="flex flex-col justify-between gap-8 ">
            <h2 className="font-bold text-3xl max-md:text-3xl max-md:text-left">
              CONSULT WITH THE
              <span className="text-[#2c9db6] px-[5px]">EXPERTS</span> &<br />
              TRANFORM YOUR FUTURE
            </h2>
            <p className="text-slate-900 lg:text-lg">
              *Your struggle is over, book your free consultation
            </p>
            <p className="text-slate-800 lg:text-lg">
              Chat now and know everything you need
            </p>
            <div className="flex max-md:flex-col max-md:w-full gap-4">
              <WhatsAppChatButton />
              <Link to="/contact">
                <button className="max-md:w-full border outline-none border-black text-black font-bold p-3  transition duration-300 text-md hover:scale-110">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
