import React, { useEffect } from "react";
import Popup from "../Popup/Popup";
import { useForm, ValidationError } from '@formspree/react';
const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, handleSubmit, resetForm] = useForm("xwkgprvd");

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        resetForm();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, resetForm]);

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);
    if (state.succeeded) {
      // Return the "Thank you" message and reset the form
      return (
        <div className="text-center">
          <p className="text-green-600 text-lg font-bold">Thank you for submitting the form!</p>
        </div>
      );
    }
  };

  return (
    <>
      <Popup />
      <div className="relative">
      </div>
      <div className="bg-slate-200 px-16 max-md:px-8 pb-20 max-md:pb-10 lg:py-20 h-auto ">
        <div className="flex text-center items-center justify-center">
          <h1 className="font-bold text-2xl lg:text-4xl py-4  text-black capitalize ">
            get yourself registered
            {/* <span className="bg-green-700 text-white px-1">I</span>
            <span className="bg-green-700 text-white pr-1">t</span>
            <span className="bg-white text-black px-1">a</span>
            <span className="bg-red-700 text-white pl-1">l</span>
            <span className="bg-red-700 text-white px-1">y</span> */}
          </h1>
        </div>


        <form onSubmit={handleFormSubmit} action="https://formspree.io/f/xwkgprvd" method="POST" className="flex items-center justify-center">
          <div className="w-[1000px] max-md:w-screen lg:w-[1300px]">
            <div clas>
              <h1 className="uppercase text-2xl font-bold">personal information</h1><hr className="h-1 mt-2 bg-[#46145e]" />
              <div className="form grid grid-cols-2 max-md:grid-cols-1 gap-3 lg:gap-5 py-4 lg:py-5 ">
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Name&nbsp;:</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Email&nbsp;:</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Mobile&nbsp;:</label>
                  <input id="mobile" name="mobile" type="text" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Age&nbsp;:</label>
                  <input id="age" name="age" type="text" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">District&nbsp;:</label>
                  <input id="district" name="district" type="text" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">City&nbsp;:</label>
                  <input id="city" name="city" type="text" required />
                </div>
              </div>
            </div>
            <div className="py-2 max-md:py-4 lg:py-6">
              <h1 className="uppercase text-2xl font-bold">education qualification</h1><hr className="h-1 mt-2 bg-[#46145e]" />
              <div className="form grid grid-cols-2 max-md:grid-cols-1 gap-3 lg:gap-5 py-4 lg:py-5">
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">A/L results&nbsp;:</label>
                  <input id="result" name="result" type="text" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">A/L stream&nbsp;:</label>
                  <select>
                    <option value="" disabled>Select stream</option>
                    <option value="Commerce" >Commerce</option>
                    <option value="Arts" >Arts</option>
                    <option value="Biological_Science" >Biological Science</option>
                    <option value=">Physical_Science" >Physical Science</option>
                    <option value="Technology" >Technology</option>
                  </select>
                  {/* <input id="stream" name="stream" type="text" required /> */}
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Latest qualification&nbsp;:</label>
                  <input id="latest" name="latest" type="text" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Interested course&nbsp;:</label>
                  <input id="interest" name="interest" type="text" required />
                </div>
              </div>
            </div>
            <div className="py-2 max-md:py-4 lg:py-6">
              <h1 className="uppercase text-2xl font-bold">migration history</h1><hr className="h-1 mt-2 bg-[#46145e]" />
              <div className="form grid grid-cols-2 max-md:grid-cols-1 gap-3 lg:gap-5 py-4 lg:py-5">
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Have you migrated before?&nbsp;:</label>
                  <input id="migration" name="migrated before?" type="text" placeholder="Yes/No, if yes then where  ?" required />
                </div>
                <div className="flex max-md:flex-col items-center max-md:items-start gap-2">
                  <label className="font-bold max-md:text-[18px] lg:text-[24px] w-60">Any realtives living abroad?&nbsp;:</label>
                  <input id="abroad" name="realtives living abroad?" type="text" placeholder="Yes/No, if yes then where  ?" required />
                </div>
              </div><hr />
              <button type="submit" disabled={state.submitting} className="bg-[#46145e] max-md:w-full p-3 rounded-full text-white w-[150px] max-md:text-xl">Submit</button>
              <div className="pt-4 max-md:w-full">
                {state.succeeded && (
                  <div className="text-center">
                    <p className="text-green-600 text-lg font-bold">Thank you for submitting the form!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
