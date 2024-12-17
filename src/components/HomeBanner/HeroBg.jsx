import React from "react";
import "../../css/HeroBg.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const HeroBg = () => {
  return (
    // HERO START

    <div className='hero-bg'>
      {/* HERO CONATINER */}
      <div className='hero-container container-lg'>
        {/* HERO TEXT CONTAINER */}
        <div className='hero-text-box'>
          <h1>
            Get <span>2500+</span>
          </h1>
          <h2>Best Online Courses From Acadia</h2>
          <p>Acquire global knowledge and build your professional skills</p>
          <a href=''>
            Find New Job <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>

        {/* HERO BACKGROUND IMAGE */}
        <div className="hero-image">
          <div className="main-image">
            <div className="animate"></div>
            <div className="bg-image">
            <img src="https://html.hixstudio.net/acadia-prev/acadia/assets/img/hero/home-6/hero-6-thumb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
