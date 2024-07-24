import React from "react";
import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex items-center gap-4 rounded">
          <img
            src={item.img}
            alt=""
            className="w-20 h-12 object-cover rounded"
          />
          <div className="flex flex-col justify-between w-[300px]">
            <Link>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
