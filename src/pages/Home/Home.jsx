import React from "react";
import "../../css/Home.css";
import HeroBg from "../../components/HomeBanner/HeroBg";
import RecentJobs from "../../components/RecentJobs/RecentJobs";

const Home = () => {
  return (
    <div className='main'>
      <HeroBg />
      <RecentJobs />
    </div>
  );
};

export default Home;
