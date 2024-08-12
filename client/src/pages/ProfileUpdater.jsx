import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Profilepic } from "../../assests";
import { NavBar } from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../components/UploadWidget";

function ProfileUpdater() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const userTrue = await axios.put(
        `http://localhost:3002/api/user/${currentUser.id}`,
        {
          username,
          email,
          password,
          avatar: avatar[0],
        },
        {
          withCredentials: true,
        }
      );

      await updateUser(userTrue.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="max-w-[1366px] mx-auto items-center max-h-screen overflow-hidden max-sm:px-5 max-md:px-10 max-lg:px-24 px-5">
      <nav className="pt-5">
        <NavBar></NavBar>
      </nav>
      <div className="h-full flex">
        <div className="flex-3 flex items-center justify-center w-full h-[100vh]">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold">Update Profile</h1>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={currentUser.username}
                className="p-5 rounded border border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser.email}
                className="p-5 rounded border border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="p-5 rounded border border-gray-500"
              />
            </div>
            <button className="p-5 rounded border-none bg-teal-500 text-white font-bold cursor-pointer">
              Update
            </button>
            {error && (
              <span className="text-red-500 font-semibold">{error}</span>
            )}
          </form>
        </div>
        <div className="flex-2 bg-[#fcf5f3] h-[100vh] flex flex-col gap-5 items-center justify-center max-md:hidden relative -top-20">
          <img
            src={avatar[0] || currentUser.avatar || `${Profilepic}`}
            alt=""
            className="w-1/2 object-cover"
          />
          <UploadWidget
            uwConfig={{
              cloudName: "estate-lamadev",
              uploadPreset: "real-estate",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          ></UploadWidget>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdater;
