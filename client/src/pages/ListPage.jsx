import React from "react";
import { NavBar } from "../components/NavBar";

import ListSearch from "../components/ListSearch";
import ListCard from "../components/ListCard";
import MapLayout from "../components/MapLayout";
import { userData } from "../dummydata";
import { Await, useLoaderData } from "react-router-dom";

function ListPage() {
  const postData = useLoaderData();

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
            <ListSearch></ListSearch>
            <React.Suspense
              fallback={
                <p className="text-lg font-semibold">
                  Loading post data ......
                </p>
              }
            >
              <Await
                resolve={postData.postResponse}
                errorElement={<p>Error loading data...</p>}
              >
                {(postResponse) => (
                  <ListCard item={postResponse.data}></ListCard>
                )}
              </Await>
            </React.Suspense>
          </div>
          <div className="w-[50%] h-[100vh] rounded-lg max-lg:hidden block">
            <React.Suspense fallback={<span>Fetching map data...</span>}>
              <Await
                resolve={postData.postResponse}
                errorElement={<span>Error fetching Map Data...</span>}
              >
                {(postResponse) => (
                  <MapLayout
                    height={"90vh"}
                    items={postResponse.data}
                  ></MapLayout>
                )}
              </Await>
            </React.Suspense>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListPage;
