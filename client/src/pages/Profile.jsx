import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { singlePostData, userData } from "../dummydata";
import ListCard from "../components/ListCard";
import MsgCard from "../components/MsgCard";
import { CloseMark, Profilepic } from "../../assests";
import ChatMsgComponent from "../components/ChatMsgComponent";
import MychatMsg from "../components/MychatMsg";
import axios from "axios";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const { updateUser, currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  });

  const handleLogout = async () => {
    await axios.post(
      `http://localhost:3002/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    updateUser(null);
    navigate("/");
  };

  const postData = useLoaderData();

  return (
    currentUser && (
      <div className="max-w-[1366px] mx-auto items-center max-h-screen overflow-hidden max-sm:px-5 max-md:px-10 max-lg:px-24 px-5">
        <nav className="pt-5 pb-5">
          <NavBar></NavBar>
        </nav>
        <section className="flex h-full w-full">
          <section className="flex flex-col gap-12  pr-12 max-md:pr-0 overflow-visible overflow-y-scroll  h-[90vh] w-[100%]">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between items-center">
                <span className="text-[34px] font-thin">User Information</span>
                <button
                  onClick={() => {
                    if (currentUser) {
                      navigate("/profile/update");
                    }
                  }}
                  className="bg-[#fece51] font-medim p-2 px-5"
                >
                  Update Profile
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-3 font-semibold">
                  Avatar:
                  <img
                    src={currentUser.avatar || `${Profilepic}`}
                    alt=""
                    className="w-[45px] h-[45px] rounded-full object-cover"
                  />
                </span>

                <span className="flex items-center gap-3 font-semibold">
                  Username:
                  <span className="text-lg">{currentUser.username}</span>
                </span>

                <span className="flex items-center gap-3 font-semibold">
                  Email: <span className="text-lg">{currentUser.email}</span>
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-teal-600 w-[100px] rounded py-2 text-white cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-[34px] font-thin">My List</span>
                <Link to={"/profile/newpost"}>
                  <button className="bg-[#fece51] font-medim p-2 px-5">
                    Create New Post
                  </button>
                </Link>
              </div>
              <React.Suspense fallback={<span>Loading post data...</span>}>
                <Await
                  resolve={postData.postResponse}
                  errorElement={<span>Error Loading Profile Data...</span>}
                >
                  {(postResponse) => (
                    <ListCard item={postResponse.data.createdPost}></ListCard>
                  )}
                </Await>
              </React.Suspense>
            </div>

            <div className="pb-10">
              <span className="text-[34px] font-thin">Saved Post</span>
              <React.Suspense fallback={<span>Loading post data...</span>}>
                <Await
                  resolve={postData.postResponse}
                  errorElement={<span>Error Loading Profile Data...</span>}
                >
                  {(postResponse) => (
                    <ListCard item={postResponse.data.savedPost}></ListCard>
                  )}
                </Await>
              </React.Suspense>
            </div>
          </section>

          <section className="bg-[#030303] h-[100vh] block max-lg:hidden -top-20 relative w-[50%] ml-6">
            <div className=" h-[100%] bg-[#fcf5f3] top-0 flex flex-col pt-16 gap-5">
              <div className="basis-1/3 grow overflow-y-scroll h-[90vh] p-5">
                <span className="text-3xl font-thin">Messages</span>
                <div className="flex flex-col gap-5 pt-5">
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                  <MsgCard></MsgCard>
                </div>
              </div>
              <div
                className={`flex flex-col gap-4  bg-white  ${
                  active ? "basis-1/3 grow hidden" : "basis-2/3 grow"
                }`}
              >
                <div className="bg-[#fbdfa0] flex justify-between items-center p-4">
                  <div className="flex gap-3 items-center">
                    <img
                      src={currentUser.avatar || `${Profilepic}`}
                      alt=""
                      className="w-[40px] h-[40px] object-cover rounded-full"
                    />
                    <span className="font-semibold">
                      {currentUser.username}
                    </span>
                  </div>
                  <button onClick={() => setActive(!active)}>
                    <img src={CloseMark} alt="" className="w-[20px] h-[20px]" />
                  </button>
                </div>

                <div className="w-full flex flex-col gap-10 overflow-y-scroll h-[40vh] p-3">
                  <ChatMsgComponent></ChatMsgComponent>
                  <MychatMsg></MychatMsg>
                  <ChatMsgComponent></ChatMsgComponent>
                  <MychatMsg></MychatMsg>
                  <ChatMsgComponent></ChatMsgComponent>
                  <MychatMsg></MychatMsg>
                  <ChatMsgComponent></ChatMsgComponent>
                  <MychatMsg></MychatMsg>
                  <ChatMsgComponent></ChatMsgComponent>
                  <MychatMsg></MychatMsg>
                </div>

                <div className="flex">
                  <input
                    type="text"
                    className="border-t-4 border-[#fbdfa0] w-full h-full p-5"
                    placeholder="type your query here"
                  />
                  <button className="bg-[#fbdfa0] w-48 font-medium resize">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    )
  );
}

export default Profile;
