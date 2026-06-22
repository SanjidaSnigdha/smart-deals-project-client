import React from "react";
import bannerImg1 from "../../assets/bg-hero-left.png";
import bannerImg2 from "../../assets/bg-hero-right.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6FD] to-[#E0F8F5] w-full mx-auto h-[550px]">
      <h1 className="w-full mx-auto h-[168px] pt-15 items-center text-center text-6xl font-bold text-[#001931]/90">
        Deal your{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Products
        </span>
        <br /> In A{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Smart
        </span>{" "}
        Way !
      </h1>
      <p className="items-center text-center mt-8 text-[#627382] text-[20px]">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>
      {/* start */}
      <div className="join">
        <div>
          <div>
            <input
              className="input join-item"
              placeholder="search For Products, Categoriees..."
            />
          </div>
        </div>

        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
      {/* end */}
      <div className="flex justify-between relative -top-40 w-full h-[550px]">
        <img src={bannerImg1} alt="" />
        <img src={bannerImg2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
