import React from "react";
import bannerImg1 from "../../assets/bg-hero-left.png";
import bannerImg2 from "../../assets/bg-hero-right.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6FD] to-[#E0F8F5] w-full mx-auto h-[550px]">
      <h1 className="w-full mx-auto h-[168px] pt-15 items-center text-center text-6xl font-bold">
        Deal your Products <br /> in a Smart way !
      </h1>
      <div className="flex justify-between relative -top-20 w-full h-[550px]">
        <img src={bannerImg1} alt="" />
        <img src={bannerImg2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
