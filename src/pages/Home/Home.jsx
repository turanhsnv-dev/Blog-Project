import React from "react";
import "../../css/Home.css";
import HeroBg from "../../components/HomeBanner/HeroBg";
import RecentJobs from "../../components/RecentJobs/RecentJobs";
import JobCard from "../../components/JobCard/JobCard";
import BannerSlider from "../../components/BannerSlider/BannerSlider";

const Home = () => {
  return (
    <div className='main'>
      <HeroBg />
      <RecentJobs />
      <BannerSlider />
      <JobCard />
    </div>
  );
};

export default Home;
