import React from "react";
import BannerPic from "../../assets/picture/User research-pana.svg";
const Banner = () => {
  return (
    <div className="mt-20 grid grid-cols-2 gap-5  max-w-7xl mx-auto">
      <div className=" flex items-center">
        <div>
          {" "}
          <h3 className="text-5xl font-bold">Response Web Design</h3>
          <div className="h-2 bg-red-500 w-28 mt-3"></div>
          <div className="mt-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, veritatis. Neque non eveniet reiciendis repellat! Omnis
              eos consequuntur quia maxime magnam facere consequatur culpa quam,
              nostrum provident nihil veniam excepturi.
            </p>
            <div className="mt-5">
              {" "}
              <button className="px-8 py-2 bg-red-500 text-white rounded-xl">
                Go Team
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={BannerPic} alt="" />
      </div>
    </div>
  );
};

export default Banner;
