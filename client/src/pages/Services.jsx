import React, { useEffect } from "react";
import serv from "../assets/covers/services.jpg";
import { ServiceData } from "../utils/data";

export default function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img src={serv} alt="serv" className="w-full h-full object-cover" />
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full">
          <div className="absolute max-md:h-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 max-md:left-0 max-md:top-0 max-md:translate-x-0 max-md:translate-y-0 flex flex-col justify-center items-center max-md:px-2">
            <div className="flex flex-col gap-3 text-center">
              <h4 className="leading-[46px] max-md:leading-normal text-[32px] lg:text-4xl max-md:text-[28px] text-white font-bold flex-wrap max-md:w-full text-center">
                Providing you the pathway to excellence
              </h4>
              <p className="text-white font-medium text-lg">
                Empower yourself with a seamless shift from school to university
                through our dedicated overseas education counseling.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-slate-200 m-0">
        <section className="p-10 max-md:px-2 lg:p-20 flex flex-col gap-y-8">
          <div className="text-center items-center justify-center">
            <h1 className="text-[16px] text-[#000080] uppercase font-bold mb-2.5">
              our services
            </h1>
            <p className="text-slate-600 font-semibold">
              Guiding you through visa applications, accommodation, and settling
              into a new educational journey seamlessly
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 max-md:gap-20 gap-8 lg:gap-10 items-center justify-center">
            {ServiceData.map((item) => {
              return (
                <div className="bg-white h-full flex flex-col items-center text-justify gap-3 p-4 w-full border rounded-xl shadow-lg ">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-green-400/30">
                    {React.createElement(item.icon, {
                      className: "text-green-500",
                      size: 32,
                    })}
                  </span>
                  <span className="text-[#46145e] text-lg font-bold flex flex-col">
                    {item.heading}
                  </span>
                  <p className="text-lg text-[#46145e] max-md:text-[16px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
