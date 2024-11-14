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
          <li>
            <NavLink to="/" className="text-black pgf">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="Category" className="infoOverHover pgf">
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to="Blog" className="shadeOverHover pgf">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="About" className="shadeOverHover pgf">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" className="shadeOverHover pgf">
              Contact
            </NavLink>
          </li>
          <li>
            <button type="button" className="btn btn-info text-white">
              + Post A Job
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
