import { Routes, Route } from "react-router";
import HomePage from "./Home";
import PricingPage from "./Pricing";
import AboutUs from "./AboutUs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
    </Routes>
  );
};

export default AllRoutes;
