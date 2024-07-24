import React from "react";
import { NavBar } from "../components/NavBar";
import { HomeImage } from "../../assests";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="max-w-[1366px] mx-auto flex flex-col items-center max-h-screen overflow-hidden max-sm:px-5 max-md:px-10 max-lg:px-24 px-5">
      <nav className="pt-5 w-full pb-5">
        <NavBar></NavBar>
      </nav>
      <div className="w-full flex gap-10">
        <section className="flex-1 flex justify-center items-center h-[100vh] pb-28">
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-semibold">Welcome back</span>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#a6a6a6] p-5 rounded-[8px]"
            />
            <input
              type="text"
              placeholder="Password"
              className="border border-[#a6a6a6] p-5 rounded-[8px]"
            />
            <button className="bg-[#008081] text-white p-5 rounded-[8px]">
              Login
            </button>
            <span>
              <Link to={"/register"}>
                <a className="text-gray-500 underline">
                  Don't you have an account?
                </a>
              </Link>
            </span>
          </div>
        </section>
        <section className="flex-1 flex  h-[100vh] relative -top-20 bg-[#fdf5f3] max-sm:hidden">
          <div className="flex items-center justify-center pt-20">
            <img src={HomeImage} alt="" width={700} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
