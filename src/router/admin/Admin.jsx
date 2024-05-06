import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import ManageProduct from "../../components/manageProduct/ManageProduct";
import CreateProduct from "../../components/createProduct/CreateProduct";

const Admin = () => {
  return (
    <section className="admin-section">
      <div className="sidebar">
        <NavLink className="link" to={"/"}>
          Home
        </NavLink>
        <NavLink className="link" to={"create_product"}>
          Create Product
        </NavLink>
        <NavLink className="link" to={"manage_product"}>
          Manage Product
        </NavLink>
      </div>
      <div className="content">
        <div className="head"></div>
        <Routes>
          <Route path="/create_product" element={<CreateProduct />} />
          <Route path="/manage_product" element={<ManageProduct />} />
        </Routes>
      </div>
    </section>
  );
};

export default Admin;
