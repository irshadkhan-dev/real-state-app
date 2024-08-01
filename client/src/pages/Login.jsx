import React, { useContext, useState } from "react";
import { NavBar } from "../components/NavBar";
import { HomeImage } from "../../assests";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setLoading(true);
    const username = formData.get("username");
    const password = formData.get("password");
    setError("");
    try {
      const res = await axios.post(
        `http://localhost:3002/api/auth/login/`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1366px] mx-auto flex flex-col items-center max-h-screen overflow-hidden max-sm:px-5 max-md:px-10 max-lg:px-24 px-5">
      <nav className="pt-5 w-full pb-5">
        <NavBar></NavBar>
      </nav>
      <div className="w-full flex gap-10">
        <section className="flex-1 flex justify-center items-center h-[100vh] pb-28">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <span className="text-3xl font-semibold">Welcome back</span>
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="border border-[#a6a6a6] p-5 rounded-[8px]"
              />
              <input
                name="password"
                type="text"
                placeholder="Password"
                className="border border-[#a6a6a6] p-5 rounded-[8px]"
              />
              <button
                disabled={isLoading}
                className="bg-[#008081] text-white p-5 rounded-[8px]"
              >
                Login
              </button>
              {error && (
                <span className="text-red-500 font-semibold">{error}</span>
              )}
              <span>
                <Link to={"/register"}>
                  <a className="text-gray-500 underline">
                    Don't you have an account?
                  </a>
                </Link>
              </span>
            </div>
          </form>
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
