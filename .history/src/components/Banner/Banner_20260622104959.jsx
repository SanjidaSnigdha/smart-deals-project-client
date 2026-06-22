import React from "react";

const Banner = () => {
  return (
    <div className="bg-base-200 w-full mx-auto h-[500px]">
      <h1 className="w-full mx-auto h-[168px] pt-15 items-center text-center text-6xl">
        Deal your Products <br /> in a Smart way !
      </h1>
      <div>
        <img src="../../assets/bg-hero-left.png" alt="" />
      </div>
      <div>
        <img src="../../assets/bg-hero-right.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
