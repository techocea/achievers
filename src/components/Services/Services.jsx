import React, {  } from "react";
import serv from "../../assets/services.jpg";
const Services = () => {
  
  return (
    <>
      <div className="h-[500px] relative max-md:w-full ">
        <img
          src={serv}
          alt="serv"
          className="brightness-50 z-[-10] absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 max-md:bottom-6 items-center flex flex-col max-md:p-5">
          <div className="flex flex-col gap-3 text-center">
          <h4 className="leading-[46px] max-md:leading-normal text-[32px] lg:text-4xl max-md:text-[28px] text-white font-bold flex-wrap max-md:w-full text-center">
          Providing you the pathway to excellence
          </h4>
          <p className="text-white font-medium text-lg">Empower yourself with a seamless shift from school to university through our dedicated overseas education counseling. </p>
          </div>
        </div>
      </div>
      <main className="bg-slate-200 m-0">
        <section className="p-10 lg:p-20 max-md:p-12 flex flex-col gap-10 lg:gap-20 ">
          <h1 className="text-[#46145e] font-bold capitalize text-center text-4xl lg:text-5xl max-md:text-center max-md:text-4xl">
            our services at negombo smart achievers
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 max-md:gap-20 gap-8 lg:gap-10 items-center justify-center">
            <div className="bg-white h-full w-full border rounded-xl shadow-lg">
              <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <p className="font-bold text-[#46145e]  uppercase">
                  "All you need is an asset,we take care of the rest"
                </p>
                <br /> <strong>HAVE YOU PASSED YOUR AL`S </strong>then at
                Negombo Smart Achievers have the golden opportunity to ensure
                that all your financial needs & requirements are personally
                facilitated to. Our qualified financial specialists will help
                you with financing your tuition fees, air tickets, PTE or IELTS.
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="text-[#46145e] font-bold ">
                  Admission Guidance
                </span>
                <br /> Our experienced councelors will walk you through the
                process of how you to get admission into the university that you
                wish. They take the opportunity amend responsibility to apply on
                behalf of you to the university of your choice and obtain the
                offer letter for you. Once you receive the offer letter they
                will guide on how the fees need to be paid as well as provide
                the documentation that you require to apply for the visa.
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="font-bold text-[#46145e]">
                  Visa Assistance
                </span>
                <br />
                Our qualified visa officers will give you step by step guidance
                on how to apply for your visa. You will be given a documentation
                check list which you should prepare. On successful completion of
                filling and obtaining the required documents we will apply for
                your visa.
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="text-[#46145e] font-bold">
                  Pre Departure Assistance
                </span>
                <br /> Once we have made your dream a reality we take pride in
                offering you ensuring you have everything ready to make your big
                move Final documentation check Airport Transport Air-ticket
                Assistance
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="font-bold text-[#46145e]"> IELTS & PTE </span>
                <br />
                We have a team of experts who can guide you in obtaining your
                desired score in PTE and IELTS to get admission into the
                universities of your choice.{" "}
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="text-[#46145e] font-bold leading-8 text-xl lg:leading-[4rem] ">
                  {" "}
                  Air Tickets{" "}
                </span>
                <br />
                We are privileged to let you know that we are able to help you
                in purchasing your air tickets to the country of your choice. We
                have special rates with reputed travel agents to ensure that you
                receive the best price.{" "}
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="font-bold text-[#46145e]">
                  Vehicle Financing
                </span>
                <br /> As an international student obtaining a loan from a bank
                in a foreign country is not only challenging but close to
                impossible!
                <span className=" text-[#46145e] font-semibold">
                  &nbsp; DO NOT LOOSE HOPE WE GOT YOU COVERED
                </span>
                . We can make the necessary arrangements to ensure that you
                receive the funds you need to make obtaining your vehicle a
                reality.
              </p>
            </div>
            <div className="bg-white h-full w-full border rounded-xl shadow-lg ">
            <p className="text-[16px] lg:text-xltext-lg p-4 text-center leading-8 ">
                <span className="text-[#46145e] font-bold">Accommodation</span>
                <br /> At Negombo Smart Achievers we understand that moving to a
                new country is a challenge. We are happy to take this burden off
                your shoulders and do the work! Once your visa is granted our
                specialized team will help you to look for accommodation to help
                you settle down when you move.
              </p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default Services;
//FaUniversity 
//FaPassport 
//BiSolidPlane
//FaFileAlt 
//MdOutlineAirplaneTicket
//FaCarSide
//ImHome