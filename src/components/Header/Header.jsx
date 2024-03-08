import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { TiTimes } from "react-icons/ti";

const Header = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: '/'
    },
    {
      id: 2,
      name: "About",
      path: '/about'
    },
    {
      id: 3,
      name: "Services",
      path: '/services'
    },
    {
      id: 4,
      name: "Study Destinations",
      path: '/study-destinations'
    },
    {
      id: 5,
      name: "Financial",
      path: '/financial'
    },
    {
      id: 6,
      name: "Apply Now",
      path: '/register'
    },
  ]

  return (
    <>
      <nav className="flex items-center justify-between py-1 px-7 max-md:px-4 bg-white z-[-2] lg:px-32">
        <div className="flex items-center gap-2 max-md:gap-2 lg:py-5">
          <Link to="/">
            <img src={logo} alt="" className="w-[60px] max-md:w-[60px]" />
          </Link>
          <div className="flex flex-col max-md:hidden">
            <h1 className="title text-xl max-md:text-[12px] lg:text-2xl max-md:w-[200px] tracking-wide max-md:tracking-normal text-black">
              NEGOMBO SMART ACHIEVERS
            </h1>
            <p className="footer-p text-black/60 tracking-[4px] max-md:tracking-normal lg:tracking-[5px] text-[12px] lg:text-lg max-md:text-[14px]">
              "Education with an excellence"
            </p>
          </div>
        </div>
        <div className="flex ">
          <ul className="md:flex gap-8 px-1 hidden">
            {Menu.map((item, index) => (
              <Link to={item.path}>
                <li className="hover:text-[#1F0259] font-medium cursor-pointer  transition-all ease-in">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div onClick={handleNav} className="cursor-pointer md:hidden">
          {!nav ? (
            <TiTimes size={45} className="text-white z-[100]" />
          ) : (
            <HiBars3 size={45} className="text-white" />
          )}
          <div
            className={`${!nav
              ? "bg-black fixed z-[16] h-full left-0 top-0 w-[67%] ease-in duration-500"
              : "fixed left-[-100%]  "
              }`}
          >
            <div className="flex flex-col items-center h-auto justify-center  md:hidden ">
              <Link
                to="/"
                className="font-normal text-[18px] py-10  text-white  border-b border-slate-800 w-full text-center"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-normal text-[18px]  text-white py-10 border-b border-slate-800 w-full text-center"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="font-normal text-[18px]  text-white py-10  border-b border-slate-800 w-full text-center"
              >
                Services
              </Link>
              <Link
                to="/financial-support"
                className="font-normal text-[18px]  text-white py-10  border-b border-slate-800 w-full text-center"
              >
                Financial
              </Link>
              <Link
                to="/register"
                pl-4
                className="bg-[#000080] w-full py-6 font-normal text-[18px] my-5 text-white text-center"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;