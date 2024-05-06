import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <img src={logo} alt="icon" />
          </NavLink>
          <div className="nav__items">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
          </div>
          <NavLink to={"/admin"} className="admin">
            Admin
          </NavLink>
          {/* <NavLink to={'/'}>Home</NavLink> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
