import React from "react";
import { NavBar } from "../components/NavBar";

import ListSearch from "../components/ListSearch";
import ListCard from "../components/ListCard";
import MapLayout from "../components/MapLayout";
import { userData } from "../dummydata";

function ListPage() {
  return (
    <>
      <section className="w-full overflow-hidden max-w-[1366px] mx-auto flex flex-col items-center max-h-[100vh] gap-6 max-sm:px-5 max-lg:px-10 lg:px-14">
        <nav className="w-full pt-3 ">
          <NavBar
            name={userData.name}
            image={userData.img}
            boolean={true}
          ></NavBar>
        </nav>

        <div className="flex w-full h-full max-lg:justify-center">
          <div className="flex flex-col overflow-y-scroll h-[100vh]">
            <ListSearch location={"Adhyanpur"}></ListSearch>
            <ListCard></ListCard>
          </div>
          <div className="w-[50%] h-[100vh] rounded-lg max-lg:hidden block">
            <MapLayout height={"90vh"}></MapLayout>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListPage;
