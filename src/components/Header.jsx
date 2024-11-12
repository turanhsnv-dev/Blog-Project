import React from "react";
const Header = () => {
  return (
    <div>
      {" "}
      <div className="NavBar">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <h3>JobStart</h3>{" "}
          </li>{" "}
          <div className="spaceBetweenNavItems"></div>{" "}
          <li>
            {" "}
            <p className="text-black">Home</p>{" "}
          </li>{" "}
          <li>
            {" "}
            <p className="infoOverHover">Category</p>{" "}
          </li>{" "}
          <li>
            {" "}
            <p className="shadeOverHover">Blog</p>{" "}
          </li>{" "}
          <li>
            {" "}
            <p className="shadeOverHover">About</p>{" "}
          </li>{" "}
          <li>
            {" "}
            <p className="shadeOverHover">Contact</p>{" "}
          </li>{" "}
          <li>
            {" "}
            <button type="button" class="btn btn-info text-white">
              + Post A Job
            </button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};
export default Header;
