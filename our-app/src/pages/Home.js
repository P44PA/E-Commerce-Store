import React from "react";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import { Review } from "../components/Review";
import { BestSeller } from "../components/BestSeller";
import { NewDesignCover } from "../components/NewDesignCover";
import { Blog } from "../components/Blog";
import Sidebar from "../common/Sidebar";

const Home = () => {
  return (
    <>
      <Banner />
      <Feature />
      <Review />
      <BestSeller />
      <NewDesignCover />
      <Blog />
      <Sidebar />
    </>
  );
};

export default Home;
