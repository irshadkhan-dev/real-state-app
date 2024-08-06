import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import { listData, singlePostData } from "../dummydata";
import { Link } from "react-router-dom";
import Pin from "./Pin";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapLayout({ height, longitude, latitude }) {
  return (
    <div className="rounded border-4">
      <MapContainer
        center={[26.79761, 85.82625]}
        zoom={13}
        style={{ height: `${height}`, width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {listData.map((item, index) => (
          <Pin item={item} key={index}></Pin>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapLayout;
