import HomePage from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import ListPage from "./pages/ListPage";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route
          element={<ListPage location={"Kathmandu"}></ListPage>}
          path="/list"
        ></Route>
        <Route element={<SinglePage></SinglePage>} path="/:id"></Route>
        <Route element={<Profile></Profile>} path="/profile"></Route>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Register></Register>} path="/register"></Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="w-full max-w-[1366px] mx-auto flex flex-col  items-center max-h-screen max-sm:px-5 gap-6 max-lg:px-16 lg:px-16">
        <nav className="w-full pt-5 ">
          <NavBar></NavBar>
        </nav>

        <HomePage></HomePage>
      </section>
    </>
  );
}

export default App;
