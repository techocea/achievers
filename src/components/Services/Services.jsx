import React from "react";
import { ServiceData } from "../../data";

function Services() {
  return (
    <div className="h-auto p-20 lg:px-52">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-5">
          <h3 className="text-[#000080] text-2xl  font-bold">
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
              <p className="py-2">{item.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
