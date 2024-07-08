import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button/Button";

export default function Intro() {
  return (
    <div className="bg-[#F6F5F2] h-full py-16 px-10">
      <div className="flex max-md:flex-col gap-12 lg:justify-center lg:items-start">
        <div className="max-w-[580px] lg:w-[680px] flex flex-col gap-y-1 max-md:gap-y-5 lg:gap-y-2">
          <h6 className="uppercase font-bold text-sm lg:text-[16px] text-[#46145e]">
            about
            <br />{" "}
            <span className="text-3xl max-md:text-2xl max-md:mt-2">
              Negombo Smart Achievers
            </span>
          </h6>
          <p className="text-sm font-medium text-slate-700 leading-normal lg:leading-relaxed">
            Welcome to the place where your study abroad dream comes true.
            <br />
            At Negombo Smart Achievers, we offer a comprehensive range of
            services designed to facilitate your academic journey. Our expert
            team provides top-tier counseling services to guide you in selecting
            the optimal course at the right university.
          </p>
          <div className="mt-3 min-w-10">
            <Link
              to="/about"
              className="flex gap-x-1.5 items-center font-medium"
            >
              <Button subject="Read More">
                <FaArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="p-4 flex max-w-[390px] lg:w-[500px] flex-col gap-3 lg:gap-5 items-center justify-center text-center">
          <h1 className="italic capitalize text-xl lg:text-2xl font-semibold text-secondary">
            company vision
          </h1>
          <p className="italic text-secondary text-sm font-semibold">
            "At Negombo Smart Achievers, we illuminate the path to global
            education, turning aspiration into achievements through personalized
            guidance, academic excellence and unwavering support"
          </p>
        </div>
      </div>
    </div>
  );
}
