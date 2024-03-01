import React, { useEffect } from "react";
import Header2 from "../Header/Header2";
import Footer from "../Footer/Footer";


import { Countries } from "../../data";

const Ireland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const desiredIndex = 4;
  const item = Countries[desiredIndex];

  return (
    <>
      <div className="relative">
        <Header2 />
      </div>
      <section className="bg-gray-300/100 py-8 border rounded-lg flex flex-col justify-center">
        <React.Fragment key={item.id}>
          <div className="flex text-center items-center justify-center">
            <p className="px-4 py-2 text-[#46145e] text-3xl font-bold">
              {item.heading}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-slate-100/100 border rounded-2xl flex max-md:flex-col items-center justify-center gap-10 my-10 mx-[5rem] max-md:p-0 shadow-2xl h-full max-md:h-auto max-md:mx-10">
              <img
                src={item.imageUrl}
                alt=""
                className="h-[324px] w-[200px] max-md:w-full object-cover border rounded-lg"
              />
              <p className="lg:text-2xl max-md:text-xl lg:leading-10 max-md:text-justify p-4 max-md:p-4 ">
                <span className="font-bold text-[#46145e]">{item.country}</span>
                &nbsp;{item.details}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mx-[5rem] max-md:mx-10 py-8">
            <h1 className="font-bold text-2xl lg:text-3xl text-[#46145e] text-center">
              {item.advantage}
            </h1>
            <div className="flex flex-col max-md:flex-col max-md:justify-center max-md:items-center gap-10">
              {item.advantageLists.map((advantageItem, advantageIndex) => (
                <div
                  key={advantageIndex}
                  className="bg-slate-100/100 flex border rounded-2xl shadow-2xl p-4  max-md:w-[300px] max-md:mx-3"
                >
                  <p className="lg:text-2xl max-md:text-xl  max-md:text-justify">
                    <span className="text-[#46145e] font-bold  lg:leading-10 ">
                      {advantageItem.title}
                    </span>
                    <br />
                    {advantageItem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      </section>
      <Footer />
    </>
  );
};

export default Ireland;
