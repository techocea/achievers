import React, { useEffect } from "react";
import { Itflag, Aflag, Cflag, Ukflag, Usaflag, irish } from "../utils/data";
import { Link } from "react-router-dom";

export default function Destinations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DestinationsData = [
    {
      id: 1,
      image: Aflag,
      name: "Australia",
      to: "/study-destinations/australia",
    },
    {
      id: 2,
      image: Cflag,
      name: "Canada",
      to: "/study-destinations/canada",
    },
    {
      id: 3,
      image: Ukflag,
      name: "United Kingdom",
      to: "/study-destinations/united-kingdom",
    },
    {
      id: 4,
      image: Usaflag,
      name: "The United States",
      to: "/study-destinations/usa",
    },
    {
      id: 5,
      image: Itflag,
      name: "Italy",
      to: "/study-destinations/italy",
    },
    {
      id: 6,
      image: irish,
      name: "Northern Ireland",
      to: "/study-destinations/ireland",
    },
  ];

  return (
    <main className="h-full w-full max-md:w-screen bg-[#F1F5F9] py-20 flex flex-col max-md:flex-col  ">
      <h2 className="text-center max-md:text-left pb-8 font-bold lg:text-3xl md:text-2xl max-md:text-xl">
        EXPLORE UNIVERSITIES AROUND THE GLOBE
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full max-md:w-screen h-full max-md:px-0 justify-center items-center">
          <h2 className="font-normal text-3xl md:text-xl max-md:text-lg pb-6 text-center">
            Your next &nbsp;
            <span className="text-teal-500 font-bold">destination</span>
            &nbsp;would be..
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 gap-16 max-md:gap-16">
            {/* country card */}
            <CountryCard DestinationsData={DestinationsData} />
            {/* /////// */}
          </div>
        </div>
      </div>
    </main>
  );
}

function CountryCard({ DestinationsData }) {
  return (
    <>
      {DestinationsData.map((item) => (
        <>
          <div>
            <Link to={item.to} key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-[250px] h-[250px] object-cover"
              />
            </Link>
            <p className="text-2xl text-center font-bold pt-6">{item.name}</p>
          </div>
        </>
      ))}
    </>
  );
}
