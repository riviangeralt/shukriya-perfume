import React from "react";
import { Carousel3Png } from "../../../assets/images";

const HomeCarousel = () => {
  return (
    <div className="h-[calc(100vh-76px)]">
      <img src={Carousel3Png} alt="" className="w-full h-full object-cover " />
    </div>
  );
};

export default HomeCarousel;
