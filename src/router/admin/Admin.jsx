import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import ManageProduct from "../../components/manageProduct/ManageProduct";
import CreateProduct from "../../components/createProduct/CreateProduct";
import { IoMdCreate } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
const Admin = () => {
  return (
    <section className="admin-section">
      <div className="sidebar">
        <NavLink className="link" to={"/"}>
          <FaHome />
          Home
        </NavLink>
        <NavLink className="link" to={"create_product"}>
          <IoMdCreate />
          Create Product
        </NavLink>
        <NavLink className="link" to={"manage_product"}>
          <MdManageHistory />
          Manage Product
        </NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="create_product" element={<CreateProduct />} />
          <Route path="manage_product" element={<ManageProduct />} />
        </Routes>
      </div>
    </section>
  );
};

export default Admin;
