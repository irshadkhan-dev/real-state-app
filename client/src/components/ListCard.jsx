import React from "react";
import { listData } from "../dummydata";
import { Bathroom, Bed, Chat, Pin, Save } from "../../assests";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

function ListCard({ item }) {
  console.log(item);
  return (
    <div className="flex flex-col gap-10 pt-12  w-full">
      {item.map((cur) => (
        <Link to={`/${cur.id}`}>
          <div key={cur.id} className="flex gap-6">
            <img
              src={cur.img[0]}
              className="rounded-[10px] block max-lg:hidden"
              width={300}
              key={cur.id}
            ></img>
            <div className="flex flex-col gap-7 w-full max-lg:gap-3 max-lg:p-2 max-lg:shadow-lg max-lg:rounded">
              <h1 className="text-xl font-semibold">{cur.title}</h1>
              <p className="flex gap-1  text-[#888897] text-sm">
                <img src={Pin} alt="" className="h-5" />
                {cur.address}
              </p>
              <p className="bg-[#ffe9b3] w-[90px] text-2xl font-light px-3 rounded-[6px]">
                ${cur.price}
              </p>
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <p className="flex bg-[#f5f5f5] p-1 rounded text-sm font-[500] items-center">
                    <img src={Bed} alt="" className="w-6 h-6 mr-1" />
                    {cur.bedroom} bedroom
                  </p>
                  <p className="flex bg-[#f5f5f5] p-1 rounded text-sm font-[500] items-center">
                    <img src={Bathroom} alt="" className="w-6 h-6 mr-1" />
                    {cur.bathroom} bathroom
                  </p>
                </div>
                <div className="flex gap-4">
                  <img
                    src={Save}
                    alt=""
                    className="w-7 h-7 border border-gray-500 p-1 rounded"
                  />
                  <img
                    src={Chat}
                    alt=""
                    className="w-7 h-7 border border-gray-500 p-1 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListCard;
