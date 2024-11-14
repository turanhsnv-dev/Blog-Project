import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="NavBar">
        <ul>
          <li>
            <h3>JobStart</h3>
          </li>
          <div className="spaceBetweenNavItems"></div>
          <NavLink to="/" className="text-black pgf">
            Home
          </NavLink>
          <NavLink to="/category" className="infoOverHover pgf">
            Category
          </NavLink>
          <NavLink to="/about" className="shadeOverHover pgf">
            About
          </NavLink>
          <NavLink to="/blog" className="shadeOverHover pgf">
            Blog
          </NavLink>
          <NavLink to="/contact" className="shadeOverHover pgf">
            Contact
          </NavLink>

          <li>
            <button type="button" className="btn btn-info text-white">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
