import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 ">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-text-color">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-accent-color "></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:y-3 lg:text-5xl leading-relaxed ">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-accent-color "></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="Hero image" />
    </div>
  );
};

export default Hero;
