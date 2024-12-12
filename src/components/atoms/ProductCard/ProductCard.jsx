import React from "react";
import { Carousel1Png, Carousel2Png } from "../../../assets/images";

const ProductCard = () => {
  return (
    <div className="group cursor-pointer">
      <div className="relative transition-all duration-300">
        <img
          src={Carousel1Png}
          alt=""
          className="opacity-1 group-hover:opacity-0 transition-all duration-300"
        />
        <img
          src={Carousel2Png}
          alt=""
          className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-all duration-300"
        />
      </div>

      <div className="mt-4">
        <div className="relative">
          <h3 className="text-4xl text-center group-hover:opacity-0">
            Product Name
          </h3>
          <h3 className="text-4xl text-center group-hover:opacity-100 opacity-0 absolute top-0 left-[50%] translate-x-[-50%]">
            Product Name 2
          </h3>
        </div>
        <div className="relative">
          <p className="text-gray-600 text-3xl text-center group-hover:opacity-0">
            Product Price
          </p>
          <p className="text-gray-600 text-3xl text-center absolute top-0 left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100">
            Product Price 2
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-2xl tracking-wide text-center group-hover:opacity-0">
        Starting from Rs. 10000.00
      </p>
    </div>
  );
};

export default ProductCard;
