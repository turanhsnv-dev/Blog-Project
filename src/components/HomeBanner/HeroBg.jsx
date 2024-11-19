import React from "react";
import "../../css/HeroBg.css";
import Dropdown from "react-bootstrap/Dropdown";

const HeroBg = () => {
  return (
    // HERO START

    <div className='hero-bg'>
      {/* HERO CONATINER */}
      <div className='hero-container container-lg'>
        {/* HERO CONTENT  */}
        <div className='hero-content'>
          {/* HERO TITLE  */}
          <div className='hero-title'>
            <h1 className='text-capitalize'>
              <span>largest job </span>
              Website on The Net
            </h1>
          </div>

          {/* HERO JOB SEARCH  */}
          <div className='hero-job-search'>
            {/* JOB FIND  */}
            <div className='hero-job-find'>
              <ul>
                <li className='text-uppercase'>
                  <a href='#'>Find a job</a>
                </li>
                <li className='text-uppercase'>
                  <a href='#'>Find a candidate</a>
                </li>
              </ul>
            </div>

            {/* JOB SEARCH INPUT  */}
            <div className='job-input-wrapper d-flex justify-content-between align-items-center'>
              <div className='col-md-3'>
                <input type='text' placeholder='eg. Web Developer' />
              </div>
              <div className='col-md-3'>
                <Dropdown className='search-dropdown'>
                  <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className='col-md-3'>
                <input type='text' placeholder='Location' />
              </div>
              <div className='col-md-3 d-flex job-search-btn d-flex justify-content-center align-items-center'>
                <a href=''>Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBg;
