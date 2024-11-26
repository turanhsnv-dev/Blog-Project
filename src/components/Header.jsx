import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="NavBar py-2">
        <ul>
          <li>
            <h3 className="text-white">JobStart</h3>
          </li>
          <div className="spaceBetweenNavItems"></div>
          <NavLink to="/" className="text-black pgf">
            Home
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
            <NavLink to="/loginform">
              <button type="button" className="btn btn-info text-white">
                Login
              </button>
            </NavLink>
          </li>
          <li className="mx-2">
            <input className="searchBar" type="text" placeholder="Search..." />
            <button className="searchButton">Search</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
