import React, { useState } from "react";
import {
  CarouselImageRecoil,
  CarouselStateRecoil,
} from "../atoms/CarouselAtom";
import { useRecoilValue, useRecoilState } from "recoil";
import { Arrow, Close, RightArrow } from "../../assests";

function Slider({ images }) {
  const [active, setActive] = useRecoilState(CarouselStateRecoil);
  console.log(active);
  return (
    <>
      <div className="flex gap-5 w-full">
        <div className="h-full">
          <a href="#" onClick={() => setActive(!active)}>
            <img
              src={images[0]}
              alt=""
              className="rounded-[10px] max-md:h-[280px] h-[350px]"
            />
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {images.slice(1).map((cur, index) => (
            <a href="#">
              <img
                src={cur}
                className="rounded-[10px] h-[109px] max-md:h-[85px]"
                width={200}
                key={index}
                onClick={() => setActive(!active)}
              ></img>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export function Carousel({ images }) {
  const [active, setActive] = useRecoilState(CarouselStateRecoil);

  const [count, setCount] = useRecoilState(CarouselImageRecoil);

  return (
    <div
      className={`min-h-screen bg-black flex flex-col justify-center overflow-hidden overflow-y-hidden h-full w-full absolute  ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center">
        <img src={images[count]} alt="" className="w-[70%] rounded-[10px]" />
      </div>
      <div className="absolute flex w-[100%] justify-between ">
        <a
          href="#"
          onClick={() => {
            if (count !== 0) {
              setCount(count - 1);
            }
          }}
        >
          <img
            src={Arrow}
            alt=""
            className="max-lg:w-20 max-md:w-12 max-sm:w-7"
            width={100}
          />
        </a>
        <a
          href="#"
          onClick={() => {
            if (count !== 3) {
              setCount(count + 1);
            }
          }}
        >
          <img
            src={RightArrow}
            alt=""
            className="max-lg:w-20 max-md:w-12 max-sm:w-7"
            width={100}
          />
        </a>
      </div>
      <div className="">
        <a href="#">
          <img
            src={Close}
            alt=""
            className="w-12 absolute right-10 top-10 max-sm:w-8"
            onClick={() => setActive(!active)}
          />
        </a>
      </div>
    </div>
  );
}

export default Slider;
