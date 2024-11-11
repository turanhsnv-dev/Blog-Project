import React from "react";
import "../../css/RecentJobs.css";
import { TfiBag } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const RecentJobs = () => {
  return (
    // START REJECNT JOB
    <div className='recent-jobs-container container-lg'>
      {/* RECENT TITLE */}
      <div className='recent-title d-flex justify-content-between align-items-center'>
        <h1>Recent Jobs</h1>

        <div className='recent-btn'>
          <a href=''>+ Post a Job</a>
        </div>
      </div>

      {/* JOB POST CONTAINER  */}
      <div className='job-list-container'>
        <div className='job-post d-flex justify-content-between align-items-center'>
          {/* POST INFORMATION  */}
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Frontend Developer</h2>
              <div className='work-style ms-3'>
                <span>Partime</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Facebook, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          {/* POST WISHLIST AND APPLY  */}
          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Full Stack Developer</h2>
              <div className='work-style ms-3 full-time'>
                <span>Full Time</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Google, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Sumgayit, Azerbaijan</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Open Source Interactive Developer</h2>
              <div className='work-style ms-3 freelance'>
                <span>Freelance</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Linkedin, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Backend Developer</h2>
              <div className='work-style ms-3 internship'>
                <span>Internship</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Microsoft, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Istanbul, Turkey</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>UX&UI Developer</h2>
              <div className='work-style ms-3 full-time'>
                <span>Full Time</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Facebook, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Torino, Italy</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Frontend Developer</h2>
              <div className='work-style ms-3 freelance'>
                <span>Freelance</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Facebook, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Help Desk</h2>
              <div className='work-style ms-3'>
                <span>Partime</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Facebook, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
        <div className='job-post d-flex justify-content-between align-items-center'>
          <div className='job-post-info'>
            <div className='post-title d-flex'>
              <h2>Cybersecurity Analyst</h2>
              <div className='work-style ms-3 full-time'>
                <span>Partime</span>
              </div>
            </div>

            <div className='post-body d-flex'>
              <div className='social-media'>
                <TfiBag />
                <span className='ms-1'>
                  <a href=''>Facebook, Inc</a>
                </span>
              </div>
              <div className='social-media ms-3'>
                <CiLocationOn />
                <span className='ms-1'>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          <div className='post-icons-right d-flex'>
            <div className='post-wishlist'>
              <CiHeart />
            </div>

            <div className='post-apply'>
              <a href='#'>Apply job</a>
            </div>
          </div>
        </div>
      </div>

      {/* JOB POST PAGINATION */}
      <div className='pagination-main'>
        <Stack spacing={2}>
          <Pagination count={10} color='primary' />
        </Stack>
      </div>
    </div>
  );
};

export default RecentJobs;
