import React from "react";
import Slider from "../Slider/Slider";
function Features() {
  return (
    <div>
      <main className="py-10 h-full max-md:w-full bg-[#F1F5F9]">
        <h1 className="text-[#8D8D8D] max-md:p-4 font-bold text-[28px] text-center max-md:text-2xl">
          FEATURED UNIVERSITIES
        </h1>
        <Slider />
      </main>
    </div>
  );
}

export default Features;
