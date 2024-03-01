import React, { useEffect } from "react";
import {
  cons,
  uni,
  bank,
  grad,
  Australia,
  Italy,
  Itflag,
  Canada,
  Uk,
  Usa,
  Ireland,
  Aflag,
  Cflag,
  Ukflag,
  Usaflag,
  irish,
  consult,
} from "../../data";

import WhatsAppChatButton from "../WhatsappChat/WhatsappChat";
import { Link } from "react-router-dom";
import { Universities } from "../../data"
const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="pb-10 h-full max-md:w-full bg-[#F5F4FF]">
        <h1 className="p-8 max-md:p-4 font-bold text-3xl max-md:text-2xl lg:text-4xl lg:pt-10 lg:pl-16">
          With you at every step - from one point to another...
        </h1>

        <div className="relative flex justify-center items-center m-8">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 relative ">
            <div className="w-[550px] lg:w-[670px] max-md:w-[330px]">
              <img src={cons} alt="" className="brightness-100" />
              <p className="font-bold text-center text-3xl max-md:text-[22px] lg:text-4xl py-4">
                Career Guidance
              </p>
              <p className="max-md:p-0 text-justify text-slate-900 lg:text-2xl max-md:text-[18px]">
                Our guidance is personalized to your specific needs, ensuring
                that you receive the most relevant and beneficial advice and
                assistance throughout your entire study abroad process.
              </p>
            </div>
            <div className="w-[550px] lg:w-[670px] max-md:w-[330px]">
              <img src={uni} alt="" className="brightness-100" />
              <p className="font-bold text-center text-3xl max-md:text-[22px] lg:text-4xl py-4">
                University Admission
              </p>
              <p className="max-md:p-0 text-justify text-slate-900 lg:text-2xl max-md:text-[18px]">
                Our team assists you in applying to universities that offer your
                chosen course, making sure you have the best options available.
              </p>
            </div>
            <div className="w-[550px] lg:w-[670px] max-md:w-[330px]">
              <img src={bank} alt="" className="brightness-100" />
              <p className="font-bold text-center text-3xl max-md:text-[22px] lg:text-4xl py-4">
                Financial Supporting
              </p>
              <p className="max-md:p-0 text-justify text-slate-900 lg:text-2xl max-md:text-[18px]">
                If required, we can help you explore financial assistance
                options, making it easier to cover tuition fees, accommodation
                costs, and other essential expenses.
              </p>
            </div>
            <div className="w-[550px] lg:w-[670px] max-md:w-[330px]">
              <img src={grad} alt="" className="brightness-100" />
              <p className="font-bold text-center text-3xl max-md:text-[22px] lg:text-4xl py-4">
                Graduation
              </p>
              <p className="max-md:p-0 text-justify text-slate-900 lg:text-2xl max-md:text-[18px]">
                University graduation is a momentous occasion that marks the
                culmination of years of dedication and hard work.
              </p>
            </div>
          </div>
        </div>
      </main>
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
            <div className="">
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-16 max-md:gap-16 justify-center items-center">
                <div className="relative card  bg-inherit border-0">
                  <Link to="/australia">
                    <img
                      src={Australia}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    />
                  </Link>
                  <div className="absolute right-4 max-md:right-0 bottom-10 card-body">
                    <img
                      src={Aflag}
                      alt=""
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <p className="text-2xl text-center font-bold pt-6">
                    Australia
                  </p>
                </div>
                <div className="relative card  bg-inherit border-0">
                  <Link to="/canada">
                    <img
                      src={Canada}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    />
                  </Link>
                  <div className="absolute right-4 max-md:right-0 bottom-10 card-body">
                    <img
                      src={Cflag}
                      alt=""
                      className="  rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <p className="w-full text-2xl text-center font-bold pt-6">
                    Canada
                  </p>
                </div>
                <div className="relative card  bg-inherit border-0">
                  <Link to="/united-kingdom">
                    <img
                      src={Uk}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    />
                  </Link>
                  <div className="absolute right-4 max-md:right-0  bottom-10 card-body">
                    <img
                      src={Ukflag}
                      alt=""
                      className="  rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <p className="text-2xl text-center font-bold pt-6">
                    United Kingdom
                  </p>
                </div>
                <div className="relative card mt-8 bg-inherit border-0">
                  <Link to="/usa">
                    <img
                      src={Usa}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    />
                  </Link>
                  <div className="absolute  right-4 max-md:right-0  bottom-10 card-body">
                    <img
                      src={Usaflag}
                      alt=""
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <p className="text-2xl text-center font-bold pt-6">
                    The United States
                  </p>
                </div>
                <div className="relative card  mt-8 bg-inherit border-0">
                  <Link to="/italy">
                    <img
                      src={Italy}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    />
                  </Link>
                  <div className="absolute right-4 max-md:right-0  bottom-10 card-body ">
                    <img
                      src={Itflag}
                      alt=""
                      className="  rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <p className="w-full text-2xl text-center font-bold pt-6">
                    Italy
                  </p>
                </div>
                <div className="relative card  mt-8 bg-inherit border-0">
                  <Link to="/ireland">
                    <img
                      src={Ireland}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    />
                  </Link>
                  <div className="absolute right-4 max-md:right-0  bottom-10 card-body ">
                    <img
                      src={irish}
                      alt=""
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <p className="w-full text-2xl text-center font-bold pt-6">
                    Northern Ireland
                  </p>
                </div>
              </div>
            </div>
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
          <img src={consult} alt="" className="w-[400px]" />
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
