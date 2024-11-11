import React from "react";
import "../../css/RecentJobs.css";
import { TfiBag } from "react-icons/tfi";

const RecentJobs = () => {
  return (
    <div className='recent-jobs-container container-lg'>
      <div className='recent-title d-flex justify-content-between align-items-center'>
        <h1>Recent Jobs</h1>

        <div className='recent-btn'>
          <a href=''>+ Post a Job</a>
        </div>
      </div>

      <div className='job-list-container'>
        <div className='job-post d-flex justify-content-between'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Frontend Developer</h2>
              <div className='work-style ms-3'>
                <span>Partime</span>
              </div>
            </div>

            <div className='post-body'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Facebook, Inc</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
