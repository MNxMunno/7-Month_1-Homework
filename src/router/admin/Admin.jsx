import React from "react";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <section className="admin">
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
      </div>
    </section>
  );
};

export default Admin;
