import React, { useState } from "react";
import { Search } from "../../assests";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchComponent() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const onHandleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const switchType = (val) => {
    console.log(val);
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <>
      <div className="flex">
        {types.map((type) => (
          <button
            className={`p-3 px-8 text-lg border-[1px] [&:nth-child(2)]:border-l-0 [&:nth-child(2)]:border-b-0 first:border-b-0 ${
              query.type === "buy"
                ? "first:bg-black first:text-white"
                : "bg-white text-black"
            } ${
              query.type === "rent"
                ? "[&:nth-child(2)]:bg-black [&:nth-child(2)]:text-white"
                : "bg-white text-black"
            } border-solid border-[#999]`}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <div className=" flex max-md:flex-col max-md:gap-1">
          <input
            name="city"
            type="text"
            placeholder="City Location"
            className="py-4 border border-[#999999] md:border-r-0 p-1"
            onChange={onHandleChange}
          />
          <input
            name="minPrice"
            type="number"
            placeholder="Min Price"
            className="py-4 border border-[#999999] md:border-l-0 md:border-r-0 p-1 lg:w-[140px]"
            onChange={onHandleChange}
          />
          <input
            name="maxPrice"
            type="number"
            placeholder="Max Price"
            className="py-4 border border-[#999999] md:border-l-0 md:border-r-0 p-1 lg:w-[140px]"
            onChange={onHandleChange}
          />
          <Link
            to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          >
            <button className="bg-[#fece51] px-6 py-2  max-md:p-2 border border-[#999999] md:border-l-0 flex items-center justify-center w-full">
              <img src={Search} alt="" className="border-none w-10" />
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default SearchComponent;
