import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSideBar = () => {
    setIsSidebarVisible(true);
  };

  const hideSideBar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div>
      <div className="NavBar py-2">
        <ul>
          <li>
            <h3 className="text-white">JobStart</h3>
          </li>
          <div className="spaceBetweenNavItems"></div>
          <NavLink to="/" className="hideOnMobile text-black pgf">
            Home
          </NavLink>
          <NavLink to="/about" className="hideOnMobile shadeOverHover pgf">
            About
          </NavLink>
          <NavLink to="/blog" className="hideOnMobile shadeOverHover pgf">
            Blog
          </NavLink>
          <NavLink to="/contact" className="hideOnMobile shadeOverHover pgf">
            Contact
          </NavLink>
          <li>
            <NavLink to="/loginform">
              <button
                type="button"
                className="hideOnMobile btn btn-info text-white"
              >
                Login
              </button>
            </NavLink>
          </li>
          <li className="hideOnMobile mx-2">
            <input className="searchBar" type="text" placeholder="Search..." />
            <button className="searchButton">Search</button>
          </li>
          <button onClick={showSideBar} className="display-none hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </ul>
        {isSidebarVisible && (
          <ul className="sideBar">
            <p className="closeSideBar" onClick={hideSideBar}>
              X
            </p>
            <li>
              <h3 className="text-white">JobStart</h3>
            </li>
            <div className="spaceBetweenNavItems"></div>
            <NavLink to="/" className="text-black pgf">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="shadeOverHover pgf">
              <li>About</li>
            </NavLink>
            <NavLink to="/blog" className="shadeOverHover pgf">
              <li>Blog</li>
            </NavLink>
            <NavLink to="/contact" className="shadeOverHover pgf">
              <li>Contact</li>
            </NavLink>
            <li>
              <NavLink to="/loginform">
                <li>
                  <button type="button" className="btn btn-info text-white">
                    Login
                  </button>
                </li>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
