import React from "react";

function Input({ legendTitle, placeholder }) {
  return (
    <div className="">
      <legend className="text-[11px] font-medium">{legendTitle}</legend>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-400 rounded h-9 p-[10px] w-[100px] shadow-lg"
      />
    </div>
  );
}

export default Input;
