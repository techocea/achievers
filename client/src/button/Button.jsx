import React from "react";

export default function Button(props) {
  return (
    <button className="bg-[#46145e] py-2 px-4 max-md:p-3 rounded-full text-white outline-0 border-0 max-md:text-lg max-md:leading-6">
      {props.subject}
    </button>
  );
}
