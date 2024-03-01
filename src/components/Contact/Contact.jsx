import React, { useEffect } from "react";
import ContactBg from "../../assets/contact.jpg";

import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";


const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" relative">
      </div>
      <img
        src={ContactBg}
        alt=""
        className="fixed brightness-50 z-[-10]  top-0 left-0 w-full h-[950px] object-cover lg:h-full "
      />
      <div className="flex max-md:flex-col items-center justify-center gap-40 max-md:gap-0 mx-40 max-md:mx-0 ">
        <div className="pb-16 max-md:pb-10 lg:py-20 flex flex-col items-center justify-center ">
          <h1 className="font-bold text-2xl lg:text-4xl py-4 text-white">
            Contact Us
          </h1>
          {/* <form onSubmit={sendEmail}>
            <div className="flex flex-col gap-4 mt-4 lg:text-2xl">
              <div className="ggrid ">
                <div class="mb-3 w-full">
                  <label
                    for="name"
                    class="form-label text-white max-md:text-lg"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control p-3 max-md:text-lg"
                    name="name"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="mb-3 w-full">
                  <label
                    for="contact"
                    class="form-label text-white max-md:text-lg"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    class="form-control p-3 max-md:text-lg"
                    name="contact"
                    placeholder="Enter Contact Number"
                  />
                </div>
                <div class="mb-3 w-full">
                  <label
                    for="email"
                    class="form-label text-white max-md:text-lg"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    class="form-control p-3 max-md:text-lg"
                    name="email"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>

              <div class="mb-3 w-full">
                <label
                  for="message"
                  class="form-label text-white max-md:text-lg"
                >
                  Message
                </label>
                <textarea
                  class="form-control p-3 max-md:text-lg"
                  name="message"
                  rows="3"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="w-full ">
                <button
                  type="submit"
                  className="bg-[#46145e] hover:bg-[#7c4994] text-white w-full border-none outline-none py-3 "
                >
                  Submit
                </button>
              </div>
            </div>
          </form> */}
        </div>
        <div className="bg-gray-400 backdrop-blur-md bg-opacity-60 w-[300px] lg:w-full h-[250px] p-4 items-center flex max-md:mb-10 lg:text-2xl text-sm">
          <div className="flex flex-col gap-3 text-white">
            <div className="flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
              <FaLocationDot />
              <a
                href="https://maps.app.goo.gl/3DGvLhf3hYEM9a519"
                rel="noreferrer"
                target="_blank"
              >
                No 88/2 Chillaw Road,Kattuwa,Negombo
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
              <BiSolidPhoneCall />
              <a href="tel:0761486266">076 148 6266</a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#59D3EE] duration-100 ease-in">
              <FaWhatsapp />
              <a href="tel:0761486265">076 148 6265</a>
            </div>
            <div className="flex items-center gap-3  hover:text-[#59D3EE] duration-100 ease-in">
              <HiOutlineMail />
              <a href="mailto:info@negombosmartachievers.lk">
                info@negombosmartachievers.lk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
