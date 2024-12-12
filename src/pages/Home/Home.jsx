import React from "react";
import { HomeCarousel, Navbar } from "../../components/molecules";
import { Carousel1Png, Carousel2Png, Carousel3Png } from "../../assets/images";
import { BestSellers } from "../../components/organisms";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <BestSellers title="Best sellers for Attars" />
      <BestSellers title="Best sellers for Perfumes" />
    </>
  );
};

export default Home;
