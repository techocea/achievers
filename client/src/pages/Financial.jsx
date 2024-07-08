import React from "react";
import { Finances } from "../utils/data";

const Financial = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className="bg-[#F5F4FF] px-20 py-16 max-md:pb-10 flex flex-col md:gap-y-5 max-md:px-5">
        <div className="flex flex-col gap-y-2">
          <h1 className="font-bold text-[#000080] capitalize text-xl lg:text-2xl">
            Don`t worry we got your back covered !
          </h1>
          <h1 className="md:text-xl">
            Explore our comprehensive range of services designed to support
            students like you in achieving your academic and financial goals.
            <br />
            <a
              href="http://www.bresciagrameen.lk"
              target="_blank"
              rel="noreferrer"
              className="lowercase underline active:text-orange-500 text-blue-700"
            >
              click here For More Information
            </a>
          </h1>
        </div>
        <div className="flex flex-col gap-3 max-md:items-center max-md:justify-center">
          {Finances.array.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-green-200 flex flex-col gap-2 lg:gap-8 rounded-lg p-4 mt-5 max-md:mx-0  max-md:w-[calc(100vw-20px )]"
                style={{ boxShadow: "0 0 10px -3px green" }}
              >
                <h1 className="text-[16px] lg:text-xl font-bold">
                  {item.title}
                </h1>
                <p className="text-lg">{item.description}</p>
                <p className="font-bold lg:text-xl ">{item.features}:</p>
                <ul>
                  {item.points.map((point, index) => {
                    return (
                      <li key={index} className="lg:text-xl text-lg">
                        &diams;&nbsp;{point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-5 py-10">
          <div className="max-md:px-2 flex flex-col">
            <h1 className="text-[#000080] text-lg  font-bold">
              Why Choose Us?
            </h1>
            <p className="">
              Take control of your financial future with our comprehensive
              finance solutions. Explore the possibilities, make informed
              decisions, and embark on a successful academic and financial
              journey with us!
            </p>
          </div>
          <div className="flex max-md:flex-col gap-10 items-center justify-center">
            {Finances.additionalArray.map((item) => (
              <div
                key={item.topic}
                className="bg-white flex flex-col gap-2 shadow-lg rounded-lg p-4 w-[340px] h-[390px] max-md:h-full lg:p-6"
              >
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-300">
                  {React.createElement(item.icon, {
                    className: "text-purple-500",
                    size: 24,
                  })}
                </span>
                <h1 className="text-lg font-bold text-[#46145e]">
                  {item.topic}
                </h1>
                <p className="text-lg text-[#46145e]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial;
