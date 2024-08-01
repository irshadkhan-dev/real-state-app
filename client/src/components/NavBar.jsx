import { useContext, useState } from "react";
import { HamBurger, Logo, Profile, Profilepic } from "../../assests";
import SideMenu from "./SideMenu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between w-full relative max-w-[1366px] z-10">
      <div className="flex items-center gap-20 max-lg:gap-10">
        <Link to={"/"}>
          <a className="flex hover:shadow-lg gap-2 w-full">
            <img src={Logo} alt="" className=" w-[35px] h-[35px]" />
            <h1 className="text-2xl font-semibold block max-lg:hidden max-md:block ">
              LamaEstate
            </h1>
          </a>
        </Link>

        <ul className="flex text-md gap-10 font-medium w-full items-center  max-md:hidden">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
          <li>
            <a href="">Agents</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 items-center ">
        {currentUser ? (
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatar || `${Profilepic}`}
              alt=""
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <h1 className="font-medium block max-md:hidden">
              {currentUser.username}
            </h1>
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="bg-[#fece51] px-5 p-1 text-lg font-medium block max-md:hidden"
            >
              Profile
            </button>
          </div>
        ) : (
          <div className="flex gap-3 text-md font-medium items-center max-sm:hidden">
            <Link to={"/login"}>
              <a className="">Sign in</a>
            </Link>

            <Link to={"/register"}>
              <a className="bg-[#fece51] p-1 px-3 rounded">Sign Up</a>
            </Link>
          </div>
        )}

        <a href="#" onClick={() => setActive(!isActive)} className="z-10">
          <img
            src={HamBurger}
            width={45}
            alt=""
            className="hidden max-md:block"
          />
        </a>

        <div
          className={`bg-black text-white w-[50%] flex justify-center h-[100vh] absolute -top-5 -right-5 transform  ${
            isActive ? "block" : "hidden"
          } ${isActive ? `translate-x-0` : `translate-x-full`}`}
        >
          <ul className="text-2xl gap-14 flex flex-col justify-center items-center ">
            <li>
              <a href="" className="">
                Home
              </a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              <a href="">Agents</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
