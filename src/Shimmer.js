import React from "react";

export const ShimmerMenu = () => {
  return (
    <div className="big-container">
      <div className="upr-item-container flex items-center">
        <div className="item-photo bg-gray-300"></div>
        <div className="item-photo-des bg-gray-300"></div>
      </div>
      <hr className="border-white-[0.5px] border-gray-700 py-2" />
      <div className="lower-container flex">
        <div className="contain-hr flex flex-wrap justify-between">
          <div className="upr-up-container">
            <div className="list-name bg-gray-300 h-5"></div>
            <div className="list-desc bg-gray-300 h-5"></div>
          </div>
          <div>
            <div className="list-img bg-gray-300"></div>
            <div className="list-btn bg-gray-300"></div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contain-hr flex flex-wrap justify-between">
          <div className="upr-up-container">
            <div className="list-name bg-gray-300 h-5"></div>
            <div className="list-desc bg-gray-300 h-5"></div>
          </div>
          <div>
            <div className="list-img bg-gray-300"></div>
            <div className="list-btn bg-gray-300"></div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contain-hr flex flex-wrap justify-between">
          <div className="upr-up-container">
            <div className="list-name bg-gray-300 h-5"></div>
            <div className="list-desc bg-gray-300 h-5"></div>
          </div>
          <div>
            <div className="list-img bg-gray-300"></div>
            <div className="list-btn bg-gray-300"></div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contain-hr flex flex-wrap justify-between">
          <div className="upr-up-container">
            <div className="list-name bg-gray-300 h-5"></div>
            <div className="list-desc bg-gray-300 h-5"></div>
          </div>
          <div>
            <div className="list-img bg-gray-300"></div>
            <div className="list-btn bg-gray-300"></div>
          </div>
        </div>
        <div className="line"></div>
        <div className="contain-hr flex flex-wrap justify-between">
          <div className="upr-up-container">
            <div className="list-name bg-gray-300 h-5"></div>
            <div className="list-desc bg-gray-300 h-5"></div>
          </div>
          <div>
            <div className="list-img bg-gray-300"></div>
            <div className="list-btn bg-gray-300"></div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="restaurant-list flex w-auto flex-wrap justify-center">
      <div className="shimmer-container flex flex-col w-[100%] ml-[70] justify-center text-center">
        <div className="shimmer-header w-[45%] h-9 mb-5 mt-7 bg-gray-300"></div>
        <div className="shimmer-img w-[90%] h-60 bg-gray-300"></div>
      </div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card rounded-md p-3 m-6" key={index}>
            <div className="w-[100%] h-[150px] object-cover rounded-lg bg-slate-300"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
