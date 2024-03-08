import React from "react";
import { ServiceData } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Map from "../../Map/Map";
import { MdEmail, MdMeetingRoom } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import Button from "../../button/Button";

function Services() {
  return (
    <div className="h-full  px-20 lg:px-52">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-5">
          <h3 className="text-[#1F0259]  text-2xl  font-bold">
            SERVICES WE OFFER
          </h3>
          <p className="text-[#8D8D8D]">
            With you at every step - from one point to another
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[350px] h-[350px] p-1 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="custom__border w-full h-[300px] object-cover"
              />
              <div className="flex items-center justify-between">
                <p className="py-2">{item.heading}</p>
                <Link
                  to="/services"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-500"
                >
                  <FaArrowRight size={32} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-3 px-auto py-20 items-center justify-center">
        <div className="text-center mb-2">
          <h3 className="text-[#1F0259]  text-2xl  font-bold">CONTACT</h3>
          <p className="text-[#8D8D8D]">We`d like to hear from you...`</p>
        </div>
        <div className="flex items-center justify-center ">
          <div className="bg-[#1F0259]  w-auto h-full p-4 shadow-lg text-white shadow-slate-200">
            <h1 className="capitalize text-5xl font-bold text-slate-500 border-b pb-2">
              Get in Touch
            </h1>
            <div className="flex flex-col gap-y-3 py-2">
              <div className="flex items-center gap-x-2">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-500">
                  <MdMeetingRoom size={32} />
                </p>
                <div className="flex flex-col gap-y-2">
                  <h4>Meet Us</h4>
                  <p>Negombo,Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-500">
                  <PiPhoneCallFill size={32} />
                </p>
                <div className="flex flex-col gap-y-2">
                  <h4>Call Us</h4>
                  <p>(076) 148 6266</p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-red-500">
                  <MdEmail size={32} />
                </p>
                <div className="flex flex-col gap-y-2">
                  <h4>Email Us</h4>
                  <p>info@negombosmartachievers.lk</p>
                </div>
              </div>
            </div>
          </div>
          {/* google map */}
          <div style={{ width: "100%", height: "100%" }}>
            <Map />
            {/* <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA_CWDygVZ4mJ-fAbvdgZcjakatLHEB-Wk&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              isMarkerShown
            /> */}
          </div>
        </div>
        <div className="mt-3">
          <Button subject="Contact Now" />
        </div>
      </div>
    </div>
  );
}

export default Services;
