import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function ContactMessage({ message }) {
  return (
    <div
      className="bg-[#B8DDE5] italic w-1/2 h-full p-2.5 text-sm
     text-[#1F0259] flex flex-col gap-y-3 text-center items-center justify-around rounded-lg max-md:w-full max-md:text-lg"
    >
      {message}
      <Link to="/register">
        <Button subject="Contact Us" />
      </Link>
    </div>
  );
}
