import React from "react";
import "../../css/Home.css";
import HeroBg from "../../components/HomeBanner/HeroBg";
import RecentJobs from "../../components/RecentJobs/RecentJobs";
import JobCard from "../../components/JobCard/JobCard";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
// import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div className='main'>
      <HeroBg />
      <RecentJobs />
      <BannerSlider />
      <JobCard />
      {/* <Services /> */}
    </div>
  );
};

export default Home;
