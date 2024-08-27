import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about flex flex-wrap justify-center items-center w-auto">
      <div className="about-container flex flex-wrap justify-center text-center items-center">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button font-bold text-lg px-4 py-2 bg-black hover:bg-gray-600 text-white rounded"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button font-bold text-lg px-4 py-3 bg-black hover:bg-gray-600 text-white rounded"
              onClick={() => setShow(true)}
            >
              {" "}
              Show My Profile
            </button>
          </Link>
        )}
        <Outlet />
      </div>

      <div>
        <div className="about-rest flex flex-row justify-center items-center ml-1">
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />{" "}
              <span className="text-white bg-black">Tasty & Fresh Food</span>
            </h1>
            <h4>
              "Better you will feel if you eat a{" "}
              <span className="font-bold">FoodVilla</span> healthy meal"
            </h4>
          </div>
          <img
            className="about-right w-[400px]"
            src={require("./assets/img/latte.png")}
            alt=""
          />
        </div>

        <div className="dashes border-b-[0.5px] border-gray-300 mb-20 mt-20"></div>
        <div className="inner-bottom flex flex-row justify-start items-start mt-[25px]">
          <img
            alt=""
            className="bottom-img"
            src={require("./assets/img/Screenshot.png")}
          />
          <div className="bottom-details flex text-center w-auto flex-col">
            <h2 className="bottom-heading font-normal">
              <span className="font-bold">FoodVilla</span> - Discover the best
              food & drinks
            </h2>
            <p className="about-bottom flex flex-wrap leading-6 text-gray-500">
              FoodVilla is an online and mobile food ordering system which we
              have developed for restaurant owners and food lovers. Through
              Foodring we are helping customers to discover the best restaurants
              in city. If you are restaurant owner, you can easily register your
              restaurant and upload restaurant menu to start receiving online
              orders through this fast growing portal without any cost.
            </p>
          </div>
        </div>
        <div className="inner-bottom flex flex-row justify-start items-start mt-6">
          <div className="bottom-details flex text-center w-auto flex-col mx-8 my-8">
            <h2 className="bottom-heading text-2xl font-normal mb-8">Vision</h2>
            <p className="about-bottom flex flex-wrap leading-6 text-gray-500">
              For food lovers who want to order food from local restaurants
              online, the Food Ordering System will be an Internet-based
              application that will accept individual or group meal orders,
              process payments, and trigger delivery of the prepared meals to a
              designated location. For Restaurant owner who wants to take and
              grow their business online, with low budget can start their online
              restaurant business and get orders from many more customers.
            </p>
          </div>
          <img
            className="bottom-img w-2 max-w-xl h-[400px]"
            src={require("./assets/img/delivery.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
