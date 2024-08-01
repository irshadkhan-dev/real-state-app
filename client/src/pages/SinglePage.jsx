import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { singlePostData, userData } from "../dummydata";
import Slider, { Carousel } from "../components/Slider";
import { useRecoilState } from "recoil";
import { CarouselStateRecoil } from "../atoms/CarouselAtom";
import {
  Bathroom,
  Bed,
  Bus,
  Fee,
  Pet,
  Restraunt,
  School,
  Size,
  Utility,
} from "../../assests";
import { SVG } from "leaflet";
import MapLayout from "../components/MapLayout";

function SinglePage() {
  const [active, setActive] = useRecoilState(CarouselStateRecoil);
  return (
    <>
      <Carousel images={singlePostData.images}></Carousel>
      <section
        className={`w-full overflow-hidden max-w-[1366px] mx-auto flex flex-col items-center max-sm:px-5 max-lg:px-16 px-10 gap-6 h-screen ${
          active ? "hidden" : "block"
        } `}
      >
        <nav className="w-full pt-5">
          <NavBar></NavBar>
        </nav>

        <div className="flex w-full">
          <section className="w-full">
            <Slider images={singlePostData.images}></Slider>
            <div className="flex justify-between w-full max-md:block pt-10 gap-10 ">
              <div className="flex flex-col gap-4 max-md:pb-5">
                <h1 className="text-4xl font-semibold">
                  {singlePostData.title}
                </h1>
                <p className="text-[#888897] text-sm">
                  {singlePostData.address}
                </p>
                <p className="bg-[#ffe9b3] w-[90px] text-2xl font-light px-3 rounded-[6px]">
                  ${singlePostData.price}
                </p>
              </div>
              <div className="bg-[#fff5db] flex flex-col justify-center items-center p-6 px-11 gap-3 rounded-[10px]">
                <img
                  src={userData.img}
                  alt=""
                  className="w-10 h-10 rounded-[50%]"
                />
                <p className="text-lg font-semibold">{userData.name}</p>
              </div>
            </div>
            <div className="pt-5">
              <p className="text-[#888897] leading-5">
                {singlePostData.description}
              </p>
            </div>
          </section>

          <section className="w-[57%] bg-[#fcf5f3] max-lg:hidden h-[90vh] ml-5 rounded overflow-y-scroll">
            <div className="w-full p-4 ">
              <h1 className="text-xl font-semibold mb-7">General</h1>
              <div className="bg-white flex flex-col gap-6 p-4 rounded-[8px]">
                <GeneralComp
                  image={Utility}
                  title={"Utilities"}
                  desc={"Renter is responsible"}
                ></GeneralComp>
                <GeneralComp
                  image={Pet}
                  title={"Pet Policy"}
                  desc={"Pets Allowed"}
                ></GeneralComp>
                <GeneralComp
                  image={Fee}
                  title={"Property Fees"}
                  desc={"Must have 3x the rent in total household income"}
                ></GeneralComp>
              </div>
            </div>

            <div className="w-full p-4">
              <h1 className="text-xl font-semibold mb-7">Sizes</h1>
              <div className="flex justify-around">
                <SizeComp desc={"80 sqft"} image={Size}></SizeComp>
                <SizeComp
                  desc={`${singlePostData.bedRooms} bedroms`}
                  image={Bed}
                ></SizeComp>
                <SizeComp
                  desc={`${singlePostData.bathroom} bathroom`}
                  image={Bathroom}
                ></SizeComp>
              </div>
            </div>

            <div className="w-full p-4 ">
              <h1 className="text-xl font-semibold mb-7">Nearby Places</h1>
              <div className="flex bg-white h-16  justify-between p-2 items-center rounded-[8px]">
                <GeneralComp
                  title={"School"}
                  desc={singlePostData.school}
                  image={School}
                ></GeneralComp>
                <GeneralComp
                  title={"Bus Stop"}
                  desc={singlePostData.bus}
                  image={Bus}
                ></GeneralComp>
                <GeneralComp
                  title={"Restaurant"}
                  desc={singlePostData.restaurant}
                  image={Restraunt}
                ></GeneralComp>
              </div>
            </div>
            <div className="w-full p-4 ">
              <h1 className="text-xl font-semibold mb-7">Location</h1>
              <MapLayout height={"200px"}></MapLayout>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

function GeneralComp({ title, desc, image }) {
  return (
    <>
      <div className="flex h-full items-center">
        <div className="bg-[#fff5db] rounded p-1 w-8 h-8 flex items-center justify-center mr-2">
          <img src={image} alt="" />
        </div>
        <div className="leading-4">
          <h1 className="text-[16px] font-semibold">{title}</h1>
          <p className="text-[11px] font-semibold">{desc}</p>
        </div>
      </div>
    </>
  );
}

function SizeComp({ desc, image }) {
  return (
    <>
      <div className="flex gap-1 bg-white p-3 rounded-[8px] mr-3 items-center">
        <img src={image} alt="" className="w-5 h-5" />
        <p className="text-[11px] xl:text-sm font-semibold lg:font-medium">
          {desc}
        </p>
      </div>
    </>
  );
}

export default SinglePage;
