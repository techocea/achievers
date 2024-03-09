import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="bg-white h-full lg:px-52 py-10 px-20">
      <div className="flex gap-12 lg:justify-between ">
        <div className="w-[580px] lg:w-[680px] flex flex-col gap-y-1 lg:gap-y-2">
          <h6 className="uppercase font-bold text-sm lg:text-[16px] text-[#46145e]">
            about
          </h6>
          <h1 className="font-medium text-2xl lg:text-3xl text-[#000080]">
            Negombo Smart Achievers
          </h1>
          <p className="text-sm lg:text-xl leading-normal lg:leading-relaxed">
            Welcome to the place where your study abroad dream comes true.
            <br />
            At Negombo Smart Achievers, we offer a comprehensive range of
            services designed to facilitate your academic journey. Our expert
            team provides top-tier counseling services to guide you in selecting
            the optimal course at the right university.
          </p>
          <Link
            to="/about"
            className="flex gap-x-1.5 lg:text-lg items-center text-red-500 font-medium underline"
          >
            Read More <FaArrowRight />
          </Link>
        </div>
        <div className="bg-white p-4  flex w-[390px] lg:w-[500px] flex-col gap-3 lg:gap-5 items-center justify-center text-center">
          <h1 className="italic capitalize text-xl lg:text-2xl font-semibold text-[#000080]">
            company vision
          </h1>
          <p className="italic text-[#000080] text-sm lg:text-xl font-semibold">
            "At Negombo Smart Achievers, we illuminate the path to global
            education, turning aspiration into achievements through personalized
            guidance, academic excellence and unwavering support"
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
