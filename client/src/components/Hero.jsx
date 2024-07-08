import React, { useEffect } from "react";
import main from "../assets/covers/homeBg.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative w-full h-[516px]">
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-[#432BB3] via-[#7143C0] to-[#AC5FCF]">
          <div className="flex flex-col h-full justify-between text-center items-center pt-4">
            <div className="flex flex-col max-md:px-4">
              <h4 className="text-3xl text-white font-normal">
                Your chance to study in the top countries in the world
              </h4>
              <div className="mt-[20px]">
                <Link to="/register">
                  <Button subject="Register for Free" />
                </Link>
              </div>
            </div>
            <img
              src={main}
              width={545}
              height={600}
              alt="best educational institutes in negombo"
              className="max-md:w-[385px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
