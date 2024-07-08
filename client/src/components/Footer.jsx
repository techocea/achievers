import React from "react";
import { FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-full max-md:h-full bg-black text-slate-300  max-md:p-6">
      <div className="flex gap-[100px] justify-center  max-md:flex-col py-10  max-md:gap-5 border-b border-slate-600">
        <div className="flex  gap-3">
          <div className="flex flex-col  max-md:items-start gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">Negombo Smart Achievers</h1>
              <p className="footer-p tracking-[5px] ">
                "Education with an excellence"
              </p>
            </div>
            <p className="tracking-wider ">
              Leading Educational Consultants in Sri Lanka
            </p>
            <p>Follow us on</p>
            <div className="flex gap-8 max-md:ml-8">
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
              <a href="https://www.instagram.com/negombosmartachievers/">
                <FaLinkedin
                  size={25}
                  className="cursor-pointer hover:text-[#59D3EE] duration-100 ease-in"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="max-md:w-full ">
          <h2 className="pb-2 ">Some Useful Links</h2>
          <div className="flex flex-col gap-2 max-md:pl-8 ">
            <Link to="/" className="hover:text-[#59D3EE] duration-100 ease-in">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#59D3EE] duration-100 ease-in"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#59D3EE] duration-100 ease-in"
            >
              Services
            </Link>
            <Link
              to="/financial"
              className="hover:text-[#59D3EE] duration-100 ease-in"
            >
              Financial
            </Link>
            <Link
              to="/study-destinations"
              className="hover:text-[#59D3EE] duration-100 ease-in"
            >
              Study Destinations
            </Link>
          </div>
        </div>
        <div className="flex flex-col  gap-3 ">
          <div className="flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
            <FaLocationDot />
            <a
              href="https://maps.app.goo.gl/3DGvLhf3hYEM9a519"
              rel="noreferrer"
              target="_blank"
            >
              No 88/2 Chillaw Road,Kattuwa,Negombo
            </a>
          </div>
          <div className="flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
            <BiSolidPhoneCall />
            <a href="tel:0761486266">076 148 6266</a>
          </div>
          <div className="flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
            <FaWhatsapp />
            <a href="tel:0761486265">076 148 6265</a>
          </div>
          <div className="max-md:text-sm flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
            <HiOutlineMail />
            <a href="mailto:info@negombosmartachievers.lk">
              info@negombosmartachievers.lk
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="py-10 ">
          &copy;&nbsp;All rights reserved&nbsp;@Negombo Smart Achievers-2024 |
          Designed & Developed by&nbsp;
          <a href="https://web.facebook.com/profile.php?id=61550819112955">
            <span className="hover:text-[#59D3EE] duration-100 ease-in">
              Webizera
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}
