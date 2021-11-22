import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="/project-react/about">Про сайт</NavLink>
        <NavLink exact to="/project-react/posts">Пости</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
