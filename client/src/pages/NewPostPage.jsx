import React from "react";

function NewPostPage() {
  return (
    <div className="flex h-full">
      <div className="flex-3 overflow-scroll p-8">
        <div className="my-8 mr-12 mb-24">
          <form
            // onSubmit={handleSubmit}
            className="flex flex-wrap justify-between gap-5"
          >
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
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
              {/* <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                className="h-48 text-base"
              /> */}
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
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
            <div className="w-1/3 flex flex-col gap-1">
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
            <div className="w-1/3 flex flex-col gap-1">
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
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" className="p-5 rounded border border-gray-400">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="school">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <label htmlFor="bus">Bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                className="p-5 rounded border border-gray-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
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
              className="w-1/3 rounded bg-teal-500 text-white font-bold border-none cursor-pointer"
            >
              Add
            </button>
            {/* {error && <span className="text-red-500">error</span>} */}
          </form>
        </div>
      </div>
      {/* <div className="flex-2 bg-[#fcf5f3] flex flex-col gap-5 items-center justify-center">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            className="w-1/2 h-44 object-cover rounded"
          />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div> */}
    </div>
  );
}

export default NewPostPage;
