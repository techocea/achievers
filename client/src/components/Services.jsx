import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import Button from "../button/Button";
import { ServiceData } from "../utils/data";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail, MdMeetingRoom } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#FFF7F1] h-full px-16 max-md:px-2">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-5">
          <h3 className="text-secondary text-2xl  font-bold">
            SERVICES WE OFFER
          </h3>
          <p className="text-grey">
            With you at every step - from one point to another
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-8">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.bgColor }}
              className="border rounded-xl shadow-lg max-md:shadow-none"
            >
              <div className="h-[180px] w-[300px] max-md:w-[calc(100vw-16px)] flex flex-col items-center text-justify gap-3 justify-between py-4">
                <img
                  src={item.image}
                  alt={item.heading}
                  width={200}
                  height={200}
                  className="object-cover flex items-center justify-center"
                />
              </div>
              <div className="flex flex-col items-start justify-between p-4">
                <p className="py-2 text-[#46145e] font-bold">{item.heading}</p>
                <Link
                  to="/services"
                  className="flex items-center gap-x-2 text-[#46145e]"
                >
                  More
                  <FaArrowRight size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-auto py-20 items-center justify-center">
        <div className="text-center mb-2">
          <h3 className="text-secondary  text-2xl  font-bold">CONTACT</h3>
          <p className="text-grey">We`d like to hear from you...</p>
        </div>
        <div className="flex max-md:flex-col items-center justify-center">
          {/* social icons */}
          <div className="hidden bg-secondary text-white w-20 h-[490px] max-md:w-[350px] max-md:h-20  max-md:flex gap-[2rem] items-center justify-center">
            <a href="https://web.facebook.com/profile.php?id=100090608059845">
              <FaFacebookSquare
                size={25}
                className="cursor-pointer hover:text-[#59D3EE] duration-100 ease-in"
              />
            </a>
            <a href="https://www.instagram.com/negombosmartachievers/">
              <BsInstagram
                size={25}
                className="cursor-pointer hover:text-[#59D3EE] duration-100 ease-in"
              />
            </a>
            <a href="https://www.linkedin.com/company/negombo-smart-achievers/">
              <FaLinkedin
                size={25}
                className="cursor-pointer hover:text-[#59D3EE] duration-100 ease-in"
              />
            </a>
          </div>
          {/* Get In Touch */}
          <div className="bg-white w-auto h-full p-4 shadow-lg text-gray-700 shadow-slate-200 rounded-lg">
            <h1 className="capitalize text-7xl font-bold leading-[6rem] lg:leading-[8rem] text-slate-500 border-b pb-2">
              Get in <br />
              Touch
            </h1>
            <div className="flex flex-col gap-y-[3rem] py-2">
              <div className="flex items-center gap-x-4 mt-[3rem]">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <MdMeetingRoom size={32} />
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <h4>Meet Us</h4>
                  <p>Negombo,Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <PiPhoneCallFill size={32} />
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <h4>Call Us</h4>
                  <p>(076) 148 6266</p>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-gray-700">
                  <MdEmail size={32} />
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <h4>Email Us</h4>
                  <p>info@negombosmartachievers.lk</p>
                </div>
              </div>
            </div>
          </div>
          {/* google map */}
          <div>
            <Map />
          </div>
        </div>
        <div className="mt-3">
          <Link to="register">
            <Button subject="Contact Now" />
          </Link>
        </div>
      </div>
    </div>
  );
}
