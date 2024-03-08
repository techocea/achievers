import React, {  } from "react";
import { Finances } from "../../data";
//FaUserGraduate
//FaUserFriends
//BsBank
//
const Financial = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
    <div className="bg-[#F5F4FF] p-20 max-md:pb-10 max-md:px-0 flex flex-col lg:gap-5">
        <div className="max-md:px-5">
          <h1 className="font-bold text-[#000080] capitalize pb-10 text-[16px] lg:text-2xl max-md:leading-[34px]">
            Don`t worry we got your back covered !
          </h1>
          <h1 className="lg:text-xl leading-[26px]">
            Explore our comprehensive range of services designed to support
            students like you in achieving your academic and financial goals.
            <br />
            <a
              href="http://www.bresciagrameen.lk"
              target="_blank"
              rel="noreferrer"
              className="capitalize underline active:text-orange-500 text-blue-700"
            >
              click here For More Information
            </a>
          </h1>
        </div>
        <div className="flex flex-col gap-3  max-md:items-center max-md:justify-center">
          {Finances.array.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-green-200 flex flex-col gap-2 lg:gap-8 rounded-lg p-4 mt-5 max-md:mx-0 max-md:w-[300px]"
                style={{ boxShadow: "0 0 10px -3px green" }}
              >
                <h1 className="text-[16px] lg:text-xl font-bold">{item.title}</h1>
                <p className="lg:text-xl text-lg max-md:leading-[26px]">
                  {item.description}
                </p>
                <p className="font-bold lg:text-xl ">{item.features}:</p>
                <ul>
                  {item.points.map((point, index) => {
                    return (
                      <li
                        key={index}
                        className="lg:text-xl text-lg max-md:leading-[30px]"
                      >
                        &diams;&nbsp;{point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col py-10 gap-5">
          <div className="max-md:px-5 flex flex-col gap-9">
            <h1 className="text-[#000080] text-lg lg:text-xl font-bold max-md:pb-10">
              Why Choose Us?
            </h1>
            <p className="lg:text-xl lg:leading-normal max-md:leading-[26px]">
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
                className="bg-white flex flex-col gap-2 shadow-lg rounded-lg p-4 w-[340px] h-full lg:h-[350px] max-md:h-full lg:p-6"
                
              >
                 <span className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-300">
                    {React.createElement(item.icon, {
                      className: "text-purple-500",
                      size: 32,
                    })}
                  </span>
                <h1 className="text-lg lg:text-xl font-bold">{item.topic}</h1>
                <p className="lg:text-lg  max-md:leading-[26px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Financial;
