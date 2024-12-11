import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const showSideBar = () => {
    setIsSidebarVisible(true);
  };

  const hideSideBar = () => {
    setIsSidebarVisible(false);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    navigate("/profile");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setAnchorEl(null);
    navigate("/loginform");
  };

  return (
    <div>
      <div className="navBar py-3 d-flex justify-content-between align-items-center">

        {/* HEADER LOGO */}
          <div className="d-flex align-items-center justify-content-center ms-4">
            <NavLink className="logo text-black fs-3 text-uppercase" to="/">JobStart</NavLink>
          </div>



         {/* HEADER MENU NAV */}
          <div className="menu-links d-flex justify-content-between align-items-center fw-bold">
            <NavLink to="/" className="hideOnMobile fs-5">
              Home
            </NavLink>
            <NavLink to="/about" className="hideOnMobile fs-5">
              About
            </NavLink>
            <NavLink to="/blog" className="hideOnMobile fs-5">
              Blog
            </NavLink>
            <NavLink to="/contact" className="hideOnMobile fs-5">
              Contact
            </NavLink>
          </div>



          {loggedInUser ? (
            <div className="d-flex align-items-center mx-5 navbar-userProfile">
              <IconButton onClick={handleProfileClick} className="m-0">
                <Avatar src={loggedInUser.avatar} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <NavLink to="/userProfile">

                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                </NavLink>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (



            // HEADER LOGIN
            <NavLink to="/loginform">
              <button type="button" className="hideOnMobile nav-btn text-white mx-4">
                Login
              </button>
            </NavLink>
          )}

          <button onClick={showSideBar} className="display-none hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        

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
            {loggedInUser ? (
              <div className="d-flex align-items-center py-2">
                <IconButton onClick={handleProfileClick} className="m-0">
                  <Avatar src={loggedInUser.avatar} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <NavLink to="/loginform">
                <button type="button" className="btn btn-info text-white mx-5">
                  Login
                </button>
              </NavLink>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
