import React from "react";
import "../../css/BannerSlider.css";

const BannerSlider = () => {
  return (
    <div className='container-lg banner-slider'>
      {/* SLIDER TITLE */}
      <div className='slider-title'>
        <h1>Job Slider Banner</h1>
      </div>

      <div
        id='carouselExampleIndicators'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <ol className='carousel-indicators'>
          <li
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
          ></li>
          <li
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='1'
          ></li>
          <li
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='2'
          ></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='First slide'
            />
            <div className='slider-overlay'>
              <h3 className='text-capitalize'>
                Find the most suitable job for yourself
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                minus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est
                saepe asperiores, beatae dolor eveniet? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dolore culpa odit.
              </p>
              <a href='#'>Find Category</a>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Second slide'
            />
            <div className='slider-overlay'>
              <h3 className='text-capitalize'>
                Working with professional teams
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                minus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est
                saepe asperiores, beatae dolor eveniet? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dolore culpa odit.
              </p>
              <a href='#'>Find Freelance Job</a>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src='https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Third slide'
            />
            <div className='slider-overlay'>
              <h3 className='text-capitalize'>
                freelance job opportunities here
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
                minus. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est
                saepe asperiores, beatae dolor eveniet? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                dolore culpa odit.
              </p>
              <a href='#'>Find Freelance Job</a>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleIndicators'
          role='button'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          {/* <span className='sr-only'>Previous</span> */}
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleIndicators'
          role='button'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          {/* <span className='sr-only'>Next</span> */}
        </a>
      </div>
    </div>
  );
};

export default BannerSlider;
