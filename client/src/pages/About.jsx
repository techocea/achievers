import React, { useEffect } from "react";
import abtImg from "../assets/covers/about-img.jpg";
import one from "../assets/serviceImages/one.png";
import two from "../assets/serviceImages/two.png";
import three from "../assets/serviceImages/three.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative w-full h-[500px]">
        <img src={abtImg} alt="abtImg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full">
          <div className="absolute max-md:h-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 max-md:left-0 max-md:top-0 max-md:translate-x-0 max-md:translate-y-0 flex flex-col justify-center items-center max-md:px-2">
            <div className="flex flex-col gap-3 text-center">
              <h4 className="text-2xl text-white font-bold flex-wrap text-center">
                At&nbsp;
                <span className="text-[#59D3EE]">Negombo Smart Achievers,</span>
                we pride ourselves on being your one-stop solution for all your
                overseas education needs
              </h4>
              <p className="text-white font-medium text-lg">
                Our extensive experience in the international education industry
                makes following your dream of international education a simpler
                and easier process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="h-full flex flex-col p-10 pb-0  max-md:p-8">
          <h1 className="text-[16px] text-[#000080] text-center font-bold mb-2.5">
            ABOUT US
          </h1>
          <p className="max-md:text-xl w-auto lg:text-[20px]">
            Welcome to Negombo Smart Achievers, where dreams take flight.
            Established in 2022, in the picturesque coastal town of Negombo, Sri
            Lanka, we are a dynamic organization committed to transforming the
            aspirations of young school leavers into reality. Our dedicated team
            of seasoned consultants, with their profound expertise in finance
            and education, has come together to help you embark on a journey
            towards higher education abroad.
            <br />
            <br />
            We have been on a mission to make overseas education accessible
            since our inception in 2008. Our global footprint spans 15 countries
            and as you will discover, we are truly different.
            <br />
            <br />
            We have dedicated teams of richly experienced professionals to help
            students like you across the globe in choosing the best courses that
            are available in international universities suitable to not only
            your interests but also your aptitude.
            <br />
            <br />
            We first understand your education and career goals and then provide
            you with the proper guidance. Here’s why you need to speak with us:
          </p>
        </div>
        <div className="h-full py-20">
          <h1 className="text-[16px] text-[#000080] pl-10  font-bold mb-2">
            WHY US
          </h1>
          <div className="h-full flex flex-col gap-y-20">
            <div className="flex max-md:flex-col gap-20 px-10  items-start w-full">
              <p className="text-[16px] lg:text-[20px] md:w-1/2">
                <span className="font-medium text-2xl text-[#46145e] md:w-1/2">
                  Career Objective Analysis and Course Selection
                </span>
                <br />
                <br />
                We begin by understanding your career objectives. By identifying
                your goals, we can tailor our guidance to ensure your education
                abroad aligns perfectly with your aspirations. <br />
                <br />
                Our experienced counselors will guide you in selecting the right
                course that matches your career goals and interests, ensuring
                that your education is both fulfilling and relevant.
              </p>
              <img
                src={one}
                alt=""
                width={400}
                height={400}
                className="max-md:w-[350px] lg:w-[480px]"
              />
            </div>
            <div className=" bg-slate-100/100 p-10  flex max-md:flex-col lg:justify-center items-center gap-20 w-full">
              <p className="text-[16px] lg:text-[20px] md:w-1/2">
                <span className="font-medium text-2xl text-[#46145e]">
                  Expert Team and Comprehensive Services
                </span>
                <br />
                <br />
                Our team is comprised of highly skilled professionals who are
                dedicated to your success. We have expert student counselors,
                qualified visa officers, and financial specialists who
                collectively bring a wealth of knowledge and experience to the
                table. With our experts by your side, you can trust that you're
                in capable hands throughout your entire study abroad journey.{" "}
                <br />
                <br />
                Our holistic approach covers every aspect of studying abroad,
                ensuring a smooth transition from your home country to your
                dream international destination. Our comprehensive services
                include
              </p>
              <img
                src={two}
                alt=""
                width={400}
                height={400}
                className="max-md:w-[350px] lg:w-[480px]"
              />
            </div>
            <div className="flex max-md:flex-col gap-20 px-10  items-start w-full">
              <p className="text-[16px] lg:text-[20px] md:w-1/2">
                <span className="font-medium text-2xl text-[#46145e] ">
                  Country Selection and University Applications
                </span>
                <br />
                <br />
                We help you choose the ideal country for achieving your
                educational and career aspirations, considering factors such as
                academic excellence, cost of living, and job prospects. <br />
                <br />
                Our team assists you in applying to universities that offer your
                chosen course, making sure you have the best options available.
              </p>
              <img
                src={three}
                alt=""
                width={400}
                height={400}
                className="max-md:w-[350px] lg:w-[480px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
