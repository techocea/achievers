import React, { } from "react";
import { Link } from "react-scroll";
import abtImg from "../../assets/about-img.jpg"
import one from "../../assets/covers/one.png";
import two from "../../assets/covers/two.png";
import three from "../../assets/covers/three.png";

const About = () => {
 
  return (
    <>
      <div className="w-full h-[500px] relative max-md:w-full">
        <img src={abtImg} alt="abtImg" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF] h-full"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 max-md:bottom-6 items-center flex flex-col max-md:p-5">
          <h4 className="leading-[46px] max-md:leading-normal text-[32px] max-md:text-[28px] text-white font-bold flex-wrap max-md:w-full text-center">
            At <span className="text-[#59D3EE]">Negombo Smart Achievers</span> ,
            we pride ourselves on being your one-stop solution for all your
            overseas education needs
          </h4>
          <Link
            activeClass="active"
            to="abtus"
            spy={true}
            smooth={true}
            offset={-32}
            duration={500}
          >
            <button className="bg-black font-bold py-2 px-4 transition duration-300 transform hover:scale-105 text-white mt-5 max-md:mt-3 p-3 text-md lg:text-2xl lg:p-4">
              Read More
            </button>
          </Link>
        </div>
      </div>
      {/* <section className="bg-slate-100/100 section h-[245px] max-md:h-full">
        <p className="text-[36px] max-md:text-xl text-center p-10 max-md:p-7">
          “At Negombo Smart Achievers, we illuminate the path to global
          education, turning aspiration into achievements through personalized
          guidance, academic excellence and unwavering support”
        </p>
      </section> */}
      <section className="h-full flex flex-col items-start text-start text-black p-10 lg:px-24 max-md:p-8 my-0">
        <h1 className="text-[16px] font-bold">ABOUT US</h1>
        <p className="max-md:text-xl w-auto max-md:w-auto">
          Welcome to Negombo Smart Achievers,
          where dreams take flight. Established in 2022, in the picturesque
          coastal town of Negombo, Sri Lanka, we are a dynamic organization
          committed to transforming the aspirations of young school leavers into
          reality. Our dedicated team of seasoned consultants, with their
          profound expertise in finance and education, has come together to help
          you embark on a journey towards higher education abroad.<br /><br />
          We have been on a mission to make overseas education accessible since our inception in 2008. Our global footprint spans 15 countries and as you will discover, we are truly different.<br /><br />
          We have dedicated teams of richly experienced professionals to help students like you across the globe in choosing the best courses that are available in international universities
          suitable to not only your interests but also your aptitude.<br /><br />
          We first understand your education and career goals and then provide you with the proper guidance. Here’s why you need to speak with us:
        </p>
      </section>
      <section className="h-full pb-20 bg-slate-100/100 lg:px-24">
        <p className="w-auto max-md:w-full text-2xl max-md:text-xl text-[#000080] text-start py-6 max-md:p-8">
          Why you should choose&nbsp;
          <span className="font-bold ">Negombo Smart Achievers</span> on this
          transformative journey?
        </p>
        <div
          id="abtus"
          className="bg-slate-100/100 h-full flex flex-col gap-20 max-md:mx-10"
        >
          <div className="flex gap-20  items-start w-full">
            <p className="text-[16px] w-1/2">
              <span className="font-medium text-2xl text-[#46145e] ">Career Objective Analysis and Course Selection</span><br /><br />
              We begin by understanding your career objectives. By identifying
              your goals, we can tailor our guidance to ensure your education
              abroad aligns perfectly with your aspirations. <br /><br />
              Our experienced counselors will guide you in selecting the right
              course that matches your career goals and interests, ensuring that
              your education is both fulfilling and relevant.
            </p>
            <img
              src={one}
              alt=""
              width={400}
              height={400}
              className="max-md:hidden lg:w-[480px]"
            />
          </div>
          <div className="flex flex-row-reverse lg:justify-center items-start gap-20 w-full">
            <p className="text-[16px] w-1/2">
              <span className="font-medium text-2xl text-[#46145e] ">Expert Team and Comprehensive Services</span><br /><br />
              Our team is comprised of highly skilled professionals who are
              dedicated to your success. We have expert student counselors,
              qualified visa officers, and financial specialists who
              collectively bring a wealth of knowledge and experience to the
              table. With our experts by your side, you can trust that you're in
              capable hands throughout your entire study abroad journey. <br /><br />
              Our holistic approach covers every aspect of studying abroad,
              ensuring a smooth transition from your home country to your dream
              international destination. Our comprehensive services include
            </p>
            <img
              src={two}
              alt=""
              width={400}
              height={400}
              className="max-md:hidden lg:w-[480px]"
            />
          </div>
          <div className="flex gap-20  items-start w-full">
            <p className="text-[16px] w-1/2">
              <span className="font-medium text-2xl text-[#46145e] ">Country Selection and University Applications</span><br /><br />
              We help you choose the ideal country for achieving your
              educational and career aspirations, considering factors such as
              academic excellence, cost of living, and job prospects. <br /><br />
              Our team assists you in applying to universities that offer your
              chosen course, making sure you have the best options available.
            </p>
            <img
              src={three}
              alt=""
              width={400}
              height={400}
              className="max-md:hidden lg:w-[480px]"
            />
          </div>
          {/*<div className="h-full flex  items-center gap-20 justify-end ">
            <img
              src={country}
              alt=""
              width="230"
              height="230"
              className="max-md:hidden"
            />
            <p className="w-[45%] max-md:w-full max-md:mx-0 shadow-lg border rounded-xl lg:text-2xl p-4 bg-white">
              <span className="font-bold text-[#46145e] ">
                Country Selection:{" "}
              </span>{" "}
              We help you choose the ideal country for achieving your
              educational and career aspirations, considering factors such as
              academic excellence, cost of living, and job prospects.
            </p>
          </div>
          <div className="h-full flex flex-row-reverse max-md:flex-col items-center gap-20 justify-end max-md:justify-start">
            <img
              src={application}
              alt=""
              width="230"
              height="230"
              className="max-md:hidden"
            />
            <p className="w-[45%] max-md:w-full max-md:mx-0 shadow-lg border rounded-xl lg:text-2xl p-4 bg-white">
              <span className="font-bold text-[#46145e] ">
                University Applications:{" "}
              </span>{" "}
              Our team assists you in applying to universities that offer your
              chosen course, making sure you have the best options available.
            </p>
          </div>
          <div className="h-full flex max-md:flex-col items-center gap-20 justify-end max-md:justify-start ">
            <img
              src={letter}
              alt=""
              width="230"
              height="230"
              className="max-md:hidden"
            />
            <p className="w-[45%]  max-md:w-full max-md:mx-0 shadow-lg border rounded-xl lg:text-2xl p-4 bg-white">
              <span className="font-bold text-[#46145e] ">
                Offer Letter Acquisition:{" "}
              </span>
              We support you through the application process to secure offer
              letters from your chosen institutions, keeping you informed and
              prepared.
            </p>
          </div>
          <div className="flex flex-row-reverse max-md:flex-col items-center gap-20  justify-end ">
            <img
              src={funds}
              alt=""
              width="230"
              height="230"
              className="max-md:hidden"
            />
            <p className="w-[45%] max-md:w-full max-md:mx-0 shadow-lg border rounded-xl lg:text-2xl p-4 bg-white">
              <span className="font-bold text-[#46145e] ">
                Financial Assistance:{" "}
              </span>{" "}
              If required, we can help you explore financial assistance options,
              making it easier to cover tuition fees, accommodation costs, and
              other essential expenses.
            </p>
          </div>
          <div className="h-full flex  max-md:flex-col items-center gap-20 justify-end max-md:justify-start">
            <img
              src={travel}
              alt=""
              width="230"
              height=""
              className="max-md:hidden"
            />
            <p className="w-[45%] max-md:w-full max-md:mx-0 shadow-lg border rounded-xl lg:text-2xl p-4 bg-white">
              <span className="font-bold text-[#46145e] ">
                Travel Arrangements
              </span>{" "}
              Our services extend to organizing your air tickets, ensuring a
              seamless transition to your chosen study destination.
            </p>
          </div>
          <div className="flex flex-row-reverse max-md:flex-col items-center gap-20  justify-end max-md:justify-start ">
            <img
              src={english}
              alt=""
              width="230"
              height="230"
              className="max-md:hidden"
            />
            <p className="w-[45%] max-md:w-full max-md:mx-0 shadow-lg border rounded-xl lg:text-2xl p-4 bg-white">
              <span className="font-bold text-[#46145e] ">
                Language Proficiency:{" "}
              </span>
              We provide coaching and support for IELTS and PTE exams, helping
              you meet language proficiency requirements for your chosen program
            </p>
          </div>
          <div className="shadow-lg border rounded-xl p-4 bg-white">
            <p className="lg:text-2xl lg:p-4">
              <span className="font-bold text-[#46145e] ">
                Tailored Guidance:
              </span>
              We understand that each student's journey is unique. Therefore,
              our guidance is personalized to your specific needs, ensuring that
              you receive the most relevant and beneficial advice and assistance
              throughout your entire study abroad process.
            </p>
          </div>
          <div className="shadow-lg border rounded-xl p-4 bg-white">
            <p className="lg:text-2xl lg:p-4">
              <span className="font-bold text-[#46145e] ">Global Network:</span>
              Our extensive network of partnerships with universities and
              institutions worldwide ensures that you have access to a wide
              range of options, allowing you to choose the best-fit educational
              opportunity.
            </p>
          </div>
          <div className="shadow-lg border rounded-xl p-4 bg-white">
            <p className="lg:text-2xl lg:p-4">
              <span className="font-bold text-[#46145e] ">
                Your Success is Our Priority:
              </span>{" "}
              At Negombo Smart Achievers, your success is our top priority. We
              are committed to supporting you at every step, from the initial
              consultation to the day you step foot on your chosen university
              campus.
            </p>
          </div> */}
        </div>
      </section>

    </>
  );
};

export default About;
