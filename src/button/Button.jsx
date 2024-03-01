import React from "react";

function Button(props) {
  return (
    <button className="bg-[#1F0259] py-2 px-3 max-md:p-5 rounded-full text-white outline-0 border-0 max-md:text-sm max-md:leading-6">
      {props.subject}
    </button>
  );
}

export default Button;
