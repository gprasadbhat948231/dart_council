import { Routes, Route } from "react-router";
import HomePage from "./Home";
import PricingPage from "./Pricing";
import AboutUs from "./AboutUs";
import Login from "./Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
