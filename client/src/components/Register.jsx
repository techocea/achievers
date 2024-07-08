import React, { useEffect } from "react";
import ContactForm from "./ContactForm";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-slate-200 px-16 max-md:px-8 max-md:py-16 pb-20 lg:py-20 h-full">
        <div className="flex flex-col items-center justify-center gap-x-10 max-md:gap-y-4">
          <div className="flex flex-col gap-y-3 max-w-xl text-center pb-16">
            <h1 className="capitalize font-bold text-5xl max-md:text-3xl text-[#46145E]">
              Speak with our experts
            </h1>
            <h6 className="text-gray-500">
              To get in touch with our expert team, simply leave your details
              below and we’ll call you for a FREE consultation.
            </h6>
            {/* arrow */}
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
