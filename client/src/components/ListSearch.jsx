import React from "react";

import DropDown from "../components/DropDown";
import Input from "../components/Input";
import { Search } from "../../assests";

function ListSearch({ location }) {
  return (
    <>
      <section className="w-full">
        <h1 className="text-2xl font-light">
          Search results for <span className="font-semibold">{location}</span>{" "}
        </h1>

        <legend className="text-[11px] font-medium">Location</legend>
        <input
          type="text"
          placeholder="City Location"
          className="border border-gray-400 rounded h-9 p-[10px] w-full"
        />

        <div className="flex gap-6 items-center justify-start pt-5 flex-wrap">
          <DropDown
            legendTitle={"Type"}
            opt1={"any"}
            opt2={"Buy"}
            opt3={"Rent"}
          ></DropDown>
          <DropDown
            legendTitle={"Property"}
            opt1={"any"}
            opt2={"Apartment"}
            opt3={"House"}
            opt4={"Condo"}
            opt5={"Land"}
          ></DropDown>
          <Input legendTitle={"Min Price"} placeholder={"any"}></Input>
          <Input legendTitle={"Max Price"} placeholder={"any"}></Input>
          <Input legendTitle={"Bedroom"} placeholder={"any"}></Input>
          <button className="bg-[#fece51]  h-[50px] w-[100px] flex items-center justify-center">
            <img src={Search} alt="" className="" />
          </button>
        </div>
      </section>
    </>
  );
}

export default ListSearch;
