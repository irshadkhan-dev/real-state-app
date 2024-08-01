import React, { useContext } from "react";
import { HomeImage } from "../../assests";
import SearchComponent from "../components/SearchComponent";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex flex-col pt-40 max-md:pt-20 pr-10  max-lg:pr-5 max-sm:pr-0 relative">
        <h1 className="text-6xl font-semibold max-sm:text-5xl ">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-lg pt-10 text-gray-900  max-sm:text-md ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint
          explicabo recusandae dicta error eaque eius reiciendis. Dignissimos
          consequuntur veritatis.
        </p>
        <div className="pt-10">
          <SearchComponent></SearchComponent>

          <div className="flex justify-between max-md:hidden pt-10 ">
            <div>
              <h1 className="text-4xl font-semibold">16+</h1>
              <p className="text-lg text-gray-600">Years of Experience</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">200</h1>
              <p className="text-lg text-gray-600">Award Gained</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">2000+</h1>
              <p className="text-lg text-gray-600">Property Raedy</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#fcf5f3] flex  w-[70%] relative left-5 items-center top-0  max-lg:hidden">
        <img
          src={HomeImage}
          alt=""
          className="absolute right-10 w-[115%] max-lg:w-[105%]"
        />
      </div>
    </div>
  );
}

export default HomePage;
