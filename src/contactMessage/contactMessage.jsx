import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

function contactMessage(props) {
  return (
    <div
      className="bg-[#B8DDE5] italic w-1/2 h-[200px] max-md:h-[300px] px-5 text-sm
     text-[#1F0259] leading-[1.8] flex flex-col text-center items-center justify-around rounded-lg max-md:w-full max-md:text-lg"
    >
      {props.message}
          <Link to="/register">
           <Button subject="Contact Us" />
          </Link>
      
    </div>
  );
}

export default contactMessage;
