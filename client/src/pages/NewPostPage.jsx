import React, { useState } from "react";
import MyEditor from "../components/MyEditor";
import axios from "axios";

import ReactQuill from "react-quill";
import UploadWidget from "../components/UploadWidget";
import "react-quill/dist/quill.snow.css";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const postRes = await axios.post(
        `http://localhost:3002/api/post/`,
        {
          postData: {
            title: inputs.title,
            price: parseInt(inputs.price),
            address: inputs.address,
            city: inputs.city,
            bedroom: parseInt(inputs.bedroom),
            bathroom: parseInt(inputs.bathroom),
            type: inputs.type,
            property: inputs.property,
            latitude: inputs.latitude,
            longitude: inputs.longitude,
            img: images,
          },

          postDetail: {
            desc: value,
            utilities: inputs.utilities,
            pet: inputs.pet,
            income: inputs.income,
            size: parseInt(inputs.size),
            school: parseInt(inputs.school),
            bus: parseInt(inputs.bus),
            restaurant: parseInt(inputs.restaurant),
          },
        },
        {
          withCredentials: true,
        }
      );
      navigate(`/${postRes.data.id}`);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div className="max-w-[1366px] mx-auto items-center max-h-screen overflow-hidden max-sm:px-5 max-md:px-10 max-lg:px-16 px-5">
      <nav className="pt-5 pb-10">
        <NavBar></NavBar>
      </nav>
      <div className="flex h-full w-full">
        <div className="w-full overflow-scroll h-[100vh] flex-2">
          <div className="flex flex-col max-lg:items-center w-full pb-28">
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap justify-between gap-5"
            >
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full h-80 flex flex-col gap-1">
                <label htmlFor="desc">Description</label>
                <ReactQuill
                  theme="snow"
                  onChange={setValue}
                  value={value}
                  className="h-48 text-base"
                ></ReactQuill>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="bedroom">Bedroom Number</label>
                <input
                  min={1}
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="bathroom">Bathroom Number</label>
                <input
                  min={1}
                  id="bathroom"
                  name="bathroom"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="latitude">Latitude</label>
                <input
                  id="latitude"
                  name="latitude"
                  type="text"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="longitude">Longitude</label>
                <input
                  id="longitude"
                  name="longitude"
                  type="text"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  className="p-5 rounded border border-gray-400"
                >
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="property">Property</label>
                <select
                  name="property"
                  className="p-5 rounded border border-gray-400"
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="utilities">Utilities Policy</label>
                <select
                  name="utilities"
                  className="p-5 rounded border border-gray-400"
                >
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>
              <div className=" w-full  flex flex-col gap-1">
                <label htmlFor="pet">Pet Policy</label>
                <select
                  name="pet"
                  className="p-5 rounded border border-gray-400"
                >
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="income">Income Policy</label>
                <input
                  id="income"
                  name="income"
                  type="text"
                  placeholder="Income Policy"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="size">Total Size (sqft)</label>
                <input
                  min={0}
                  id="size"
                  name="size"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="school">School</label>
                <input
                  min={0}
                  id="school"
                  name="school"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="bus">Bus</label>
                <input
                  min={0}
                  id="bus"
                  name="bus"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="restaurant">Restaurant</label>
                <input
                  min={0}
                  id="restaurant"
                  name="restaurant"
                  type="number"
                  className="p-5 rounded border border-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full h-[70px] mt-6 rounded bg-teal-500 text-white font-bold border-none cursor-pointer"
              >
                Add
              </button>
              {error && <span className="text-red-500">{error}</span>}
            </form>
          </div>
        </div>
        <div className="flex-2 flex-wrap bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center relative -top-20 max-lg:hidden w-[70%] ml-10">
          {images.map((image, index) => (
            <img src={image} key={index} width={160}></img>
          ))}
          <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: "estate-lamadev",
              uploadPreset: "real-estate",
              folder: "posts",
            }}
            setState={setImages}
          />
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
