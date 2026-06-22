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
      <div className="join items-center">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-neutral join-item">Join</button>
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
