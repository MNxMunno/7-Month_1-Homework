// import axios from "./api";
import React from "react";
import useFetch from "./hooks/useFetch";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import Admin from "./router/admin/Admin";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import CreateProduct from "./components/createProduct/CreateProduct";
import ManageProduct from "./components/manageProduct/ManageProduct";
import Home from "./router/home/Home";
import About from "./router/about/About";

const App = () => {
  const { data, loading } = useFetch("/products");

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create_product" element={<CreateProduct />} />
          <Route path="manage_product" element={<ManageProduct />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
