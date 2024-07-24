import React from "react";

function DropDown({ legendTitle, opt1, opt2, opt3, opt4, opt5 }) {
  return (
    <div>
      <legend className="text-[11px] font-medium">{legendTitle}</legend>
      <select
        name=""
        id=""
        className="border border-gray-400 rounded h-9 p-[5px] w-[100px] items-center flex justify-center shadow-lg"
      >
        <option value="">{opt1}</option>
        <option value="">{opt2}</option>
        <option value="">{opt3}</option>
        <>
          {legendTitle === "Property" && (
            <>
              <option value="">{opt4}</option>
              <option value="">{opt5}</option>
            </>
          )}
        </>
      </select>
    </div>
  );
}

export default DropDown;
