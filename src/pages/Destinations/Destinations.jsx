import React, { useEffect } from "react";
import {
//   Australia,
//   Italy,
  Itflag,
//   Canada,
//   Uk,
//   Usa,
//   Ireland,
  Aflag,
  Cflag,
  Ukflag,
  Usaflag,
  irish,
} from "../../data";

import { Link } from "react-router-dom";
const Destinations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 return (
    <main className="h-full w-full max-md:w-screen bg-[#F1F5F9] py-20 flex flex-col max-md:flex-col  ">
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
                      src={Aflag}
                      alt=""
                      className="rounded-full w-[250px] h-[250px] object-cover"
                    />
                    {/* <img
                      src={Australia}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    /> */}
                  </Link>
                  <div className=" right-4 max-md:right-0 bottom-10 card-body">
                   
                  </div>
                  <p className="text-2xl text-center font-bold pt-6">
                    Australia
                 </p>
                </div>
                <div className="relative card  bg-inherit border-0">
                  <Link to="/canada">
                      <img
                      src={Cflag}
                      alt=""
                      className="  rounded-full w-[250px] h-[250px] object-cover"
                    />
                    {/* <img
                      src={Canada}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    /> */}
                  </Link>
                  <div className=" right-4 max-md:right-0 bottom-10 card-body">
                  
                  </div>
                  <p className="w-full text-2xl text-center font-bold pt-6">
                    Canada
                  </p>
                </div>
                <div className="relative card  bg-inherit border-0">
                  <Link to="/united-kingdom">
                    <img
                      src={Ukflag}
                      alt=""
                      className="  rounded-full w-[250px] h-[250px] object-cover"
                    />
                    {/* <img
                      src={Uk}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    /> */}
                  </Link>
                  <div className=" right-4 max-md:right-0  bottom-10 card-body">
                    
                  </div>
                  <p className="text-2xl text-center font-bold pt-6">
                    United Kingdom
                  </p>
                </div>
                <div className="relative card mt-8 bg-inherit border-0">
                  <Link to="/usa">
                     <img
                      src={Usaflag}
                      alt=""
                      className="rounded-full w-[250px] h-[250px] object-cover"
                    />
                    {/* <img
                      src={Usa}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    /> */}
                  </Link>
                  <div className="  right-4 max-md:right-0  bottom-10 card-body">
                   
                  </div>
                  <p className="text-2xl text-center font-bold pt-6">
                    The United States
                  </p>
                </div>
                <div className="relative card  mt-8 bg-inherit border-0">
                     
                 <Link to="/italy">
                  <img
                      src={Itflag}
                      alt=""
                      className="  rounded-full w-[250px] h-[250px] object-cover"
                    />
                    
                  </Link> 
                  {/* <img
                      src={Italy}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    /> */}
                  <div className=" right-4 max-md:right-0  bottom-10 card-body ">
                   
                  </div>
                  <p className="w-full text-2xl text-center font-bold pt-6">
                    Italy
                  </p>
                </div>
                <div className="relative card  mt-8 bg-inherit border-0">
                    
                   <Link to="/ireland">
                    <img
                      src={irish}
                      alt=""
                      className="rounded-full w-[250px] h-[250px] object-cover"
                    />
                   
                  </Link>
                   {/* <img
                      src={Ireland}
                      alt=""
                      className="hover:brightness-75 w-[250px] lg:w-[300px] lg:h-[300px] h-[260px] object-cover max-md:w-[300px] rounded-3xl "
                    /> */}
                  <div className=" right-4 max-md:right-0  bottom-10 card-body ">
                    
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
 )
}
        

export default Destinations;