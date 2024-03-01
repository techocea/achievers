import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { TiTimes } from "react-icons/ti";

const Header = () => {
  const location = useLocation();
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const NavLink = ({ to, label }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        className={`font-bold text-18 text-white transition duration-300 
          } ${isActive ? "bg-[#000080] rounded-full py-2 px-3" : ""}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav className="flex items-center justify-between py-1 px-7 max-md:px-4 bg-black z-[-2]">
        <div className="flex items-center gap-8 max-md:gap-2 lg:py-5">
          <Link to="/">
            <img src={logo} alt="" width={80} className="w-[100px] max-md:w-[80px] lg:w-[80px]" />
          </Link>
          <div className="flex flex-col max-md:hidden">
            <h1 className="title text-xl max-md:text-[12px] lg:text-3xl max-md:w-[200px] tracking-wide max-md:tracking-normal text-white">
              NEGOMBO SMART ACHIEVERS
            </h1>
            <p className="footer-p text-slate-300 tracking-[4px] max-md:tracking-normal lg:tracking-[5px] text-[12px] lg:text-[22px] max-md:text-[14px]">
              "Education with an excellence"
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 lg:text-[22px] max-md:hidden">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About Us" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/financial-support" label="Financial" />
          <NavLink to="/contact" label="Contact Us" />
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
                to="/contact"
                pl-4
                className="bg-[#000080] w-full py-6 font-normal text-[18px] my-5 text-white text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

{
  /* <div onClick={handleNav} className="cursor-pointer md:hidden">
          {!nav ? (
            <TiTimes size={45} className="text-white z-[100]" />
          ) : (
            <HiBars3 size={45} className="text-white" />
          )}
          <div
            className={
              !nav
                ? "bg-black fixed z-[16] h-full left-0 top-0 w-[67%] ease-in duration-500"
                : "fixed left-[-100%]"
            }
          >
            
          </div>
        </div>
      </sidebar>
    </>
  );
};

export default Header; */
}
