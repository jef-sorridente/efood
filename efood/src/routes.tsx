import { Routes, Route } from "react-router-dom";

import Product from "./Pages/Product";
import Home from "./Pages/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<Product />} />
  </Routes>
);

export default AppRoutes;
