import React, { useState } from "react";
import { Search } from "../../assests";

function SearchComponent() {
  const [color, setColor] = useState(true);

  return (
    <>
      <div className="flex">
        <button
          onClick={() => setColor(!color)}
          className={`px-8 p-3 border border-[#999999] border-r-0 border-b-0 rounded-tl-md ${
            color ? `bg-black text-white border-none` : `bg-white text-black`
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setColor(!color)}
          className={`px-8 p-3  border rounded-tr-md border-[#999999] border-b-0 ${
            color ? `bg-white text-black` : `bg-black text-white`
          }`}
        >
          Rent
        </button>
      </div>
      <div className=" flex max-md:flex-col max-md:gap-1">
        <input
          type="text"
          placeholder="City Location"
          className="py-4 border border-[#999999] md:border-r-0 p-1"
        />
        <input
          type="number"
          placeholder="Min Price"
          className="py-4 border border-[#999999] md:border-l-0 md:border-r-0 p-1 lg:w-[140px]"
        />
        <input
          type="number"
          placeholder="Max Price"
          className="py-4 border border-[#999999] md:border-l-0 md:border-r-0 p-1 lg:w-[140px]"
        />
        <a
          href=""
          className="bg-[#fece51] px-4  max-md:p-2 border border-[#999999] md:border-l-0 flex items-center justify-center w-full"
        >
          <img src={Search} alt="" className="border-none w-10" />
        </a>
      </div>
    </>
  );
}

export default SearchComponent;
