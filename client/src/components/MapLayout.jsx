import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import { listData, singlePostData } from "../dummydata";
import { Link, useLoaderData } from "react-router-dom";
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

function MapLayout({ height, items }) {
  return (
    <div className="rounded border-4">
      <MapContainer
        center={
          items.length === 1
            ? [items[0].latitude, items[0].longitude]
            : [27.7172, 85.324]
        }
        zoom={13}
        style={{ height: `${height}`, width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {items.map((item, index) => (
          <Pin item={item} key={index}></Pin>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapLayout;
