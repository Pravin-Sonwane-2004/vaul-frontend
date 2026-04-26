import { Route, Routes } from "react-router-dom";
import MainLayout from "./reactsetup/MainLayout";
import Home from "./user/hompage/Home";
import Register from "./user/public/Register";
// import AllUsers from "./user/public/AllUsers";
// import Login from "./user/public/Login";

function Router() {
  return (
    <Routes>
      {/* With Header/Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/users" element={<AllUsers />} /> */}
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Without Layout */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
}

export default Router;