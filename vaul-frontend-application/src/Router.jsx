import { Route, Routes } from "react-router-dom";
import MainLayout from "./reactsetup/MainLayout";
import Home from "./user/hompage/Home";
import Register from "./user/public/Register";
// import AllUsers from "./user/public/AllUsers";
import Login from "./user/public/Login";
import Contact from "./user/public/contact";
import Features from "./user/public/Features";
import GetStarted from "./user/get-started/GetStarted";


function Router() {
  return (
    <Routes>
      {/* With Header/Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/users" element={<AllUsers />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/get-started" element={<GetStarted/>} />
      </Route>
      {/* Without Layout here will not be any layout */}

    </Routes>
  );
}

export default Router;