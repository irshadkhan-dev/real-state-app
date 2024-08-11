import React, { useState } from "react";

import DropDown from "../components/DropDown";
import Input from "../components/Input";
import { Search } from "../../assests";
import { useParams, useSearchParams } from "react-router-dom";

function ListSearch({ location }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",

    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000000,
    property: searchParams.get("property") || "",
    bedroom: searchParams.get("bedroom") || 1,
  });
  console.log(query);

  const onHandleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <>
      <section className="w-full">
        <h1 className="text-2xl font-light">
          Search results for{" "}
          <span className="font-semibold">{searchParams.get("city")}</span>{" "}
        </h1>

        <legend className="text-[11px] font-medium">Location</legend>
        <input
          name="city"
          id="city"
          type="text"
          placeholder="City Location"
          className="border border-gray-400 rounded h-9 p-[10px] w-full"
          defaultValue={query.city}
          onChange={onHandleChange}
        />

        <div className="flex gap-6 items-center justify-start pt-5 flex-wrap">
          <div>
            <legend className="text-[11px] font-medium">Type</legend>
            <select
              name="type"
              id="type"
              defaultValue={query.type}
              className="border border-gray-400 rounded h-9 p-[5px] w-[100px] items-center flex justify-center shadow-lg"
              onChange={onHandleChange}
            >
              <option value="">{"any"}</option>
              <option value="buy">{"buy"}</option>
              <option value="rent">{"rent"}</option>
            </select>
          </div>

          <div>
            <legend className="text-[11px] font-medium">Property</legend>
            <select
              name="property"
              id="property"
              defaultValue={query.property}
              className="border border-gray-400 rounded h-9 p-[5px] w-[100px] items-center flex justify-center shadow-lg"
              onChange={onHandleChange}
            >
              <option value="">{"any"}</option>
              <option value="apartment">{"apartment"}</option>
              <option value="land">{"land"}</option>
              <option value="house">{"house"}</option>
              <option value="condo">{"condo"}</option>
            </select>
          </div>

          <div className="">
            <legend className="text-[11px] font-medium">Min Price</legend>
            <input
              name="minPrice"
              type="text"
              defaultValue={query.minPrice}
              placeholder={"any"}
              className="border border-gray-400 rounded h-9 p-[10px] w-[100px] shadow-lg"
              onChange={onHandleChange}
            />
          </div>
          <div className="">
            <legend className="text-[11px] font-medium">Max Price</legend>
            <input
              name="maxPrice"
              type="text"
              defaultValue={query.maxPrice}
              placeholder={"any"}
              className="border border-gray-400 rounded h-9 p-[10px] w-[100px] shadow-lg"
              onChange={onHandleChange}
            />
          </div>
          <div className="">
            <legend className="text-[11px] font-medium">Bedroom</legend>
            <input
              type="number"
              name="bedroom"
              defaultValue={query.bedroom}
              placeholder={"any"}
              className="border border-gray-400 rounded h-9 p-[10px] w-[100px] shadow-lg"
              onChange={onHandleChange}
            />
          </div>
          <button
            className="bg-[#fece51]  h-[50px] w-[100px] flex items-center justify-center"
            onClick={handleFilter}
          >
            <img src={Search} alt="" className="" />
          </button>
        </div>
      </section>
    </>
  );
}

export default ListSearch;
