import { Route, Routes } from "react-router-dom";
import Home from "./user/hompage/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Router;
