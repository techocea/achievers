import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { TiTimes } from "react-icons/ti";
import { Menu } from "../utils/data";

export default function Header() {
  const { pathname } = useLocation();
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="flex items-center justify-between h-20 px-7 max-md:px-4 bg-white z-[-2] ">
        <div className="flex items-center gap-2 max-md:gap-2 lg:py-5">
          <Link to="/">
            <img src={logo} alt="" className="w-[60px] max-md:w-[60px]" />
          </Link>
          <div className="flex flex-col max-md:hidden">
            <h1 className="title text-xl max-md:text-[12px]  max-md:w-[200px] tracking-wide max-md:tracking-normal text-black">
              NEGOMBO SMART ACHIEVERS
            </h1>
            <p className="footer-p text-black/60 tracking-[4px] max-md:tracking-normal lg:tracking-[5px] text-[12px] max-md:text-[14px]">
              "Education with an excellence"
            </p>
          </div>
        </div>
        <div className="flex h-20 max-md:hidden">
          {/* <ul className="md:flex gap-8 px-1  items-center justify-center h-full hidden"> */}
          {Menu.map((item) => (
            <Link to={item.path}>
              <li
                className={`md:flex px-2 font-medium transition-all ease-in cursor-pointer flex items-center justify-center h-full 
                  ${
                    pathname === item.path
                      ? "bg-[#46145e] text-white"
                      : "hover:bg-[#46145e] hover:text-white" // text-[#000080]  text-[#46145e]
                  }
                  ${item.name === "Apply Now" ? "bg-red-600 text-white" : ""}
                `}
              >
                {item.name}
              </li>
            </Link>
          ))}
          {/* </ul> */}
        </div>
        {/* //mobile navigation */}
        <div onClick={handleNav} className="cursor-pointer md:hidden w-10 h-10">
          {!nav ? (
            <TiTimes size={45} className="text-[#46145E] z-[100]" />
          ) : (
            <HiBars3 size={45} className="text-[#46145E]" />
          )}
          <div
            className={`${
              !nav
                ? "bg-white fixed z-[16] h-full left-0 top-[5rem] w-full ease-in duration-500 border-t border-slate-900"
                : "fixed left-[-100%]  "
            }`}
          >
            <div className="flex flex-col items-center gap-8 translate-y-1/4 ">
              {Menu.map((item) => (
                <Link to={item.path}>
                  <li
                    className={`md:flex px-2 font-medium transition-all ease-in cursor-pointer flex h-full 
                  ${
                    pathname === item.path
                      ? "border-b-2 border-primary font-bold w-full"
                      : "hover:text-primary "
                  }
                  ${
                    item.name === "Apply Now"
                      ? "bg-red-600 rounded-full py-2 px-3 text-white"
                      : ""
                  }
                `}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
