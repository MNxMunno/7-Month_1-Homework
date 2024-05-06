import React from "react";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <section className="admin">
      <div className="sidebar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"create_product"}>Create Product</NavLink>
        <NavLink to={"manage_product"}>Manage Product</NavLink>
      </div>
      <div className="content"></div>
    </section>
  );
};

export default Admin;
