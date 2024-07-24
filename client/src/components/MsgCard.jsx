import React from "react";
import { userData } from "../dummydata";

function MsgCard() {
  return (
    <div className="flex gap-3 bg-white rounded-[8px] p-4 items-center">
      <img
        src={userData.img}
        alt=""
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <span className="font-semibold">{userData.name}</span>
      <span>Lorem ipsum dolor sit amet </span>
    </div>
  );
}

export default MsgCard;
