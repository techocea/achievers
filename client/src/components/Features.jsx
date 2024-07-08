import React from "react";
import Slider from "./Slider";

export default function Features() {
  return (
    <div>
      <main className="pt-10 h-full max-md:w-full bg-[#F6F5F2]">
        <h1 className="text-grey max-md:p-4 font-bold text-[28px] text-center max-md:text-2xl">
          FEATURED UNIVERSITIES
        </h1>
        <Slider />
      </main>
    </div>
  );
}
