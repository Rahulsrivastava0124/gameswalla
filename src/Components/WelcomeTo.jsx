import React from "react";
import {
  StarIcon,
  CurrencyRupeeIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
export default function WelcomeTo() {
  return (
    <>
      <div className=" bg-gray-50 border rounded-2xl flex flex-col-reverse md:flex-row flex-wrap my-8 mx-3 md:mx-16 p-6 justify-evenly items-center bg-[url('./Images/DarkBackground.png')]">
        <div className="">
          <h1 className=" flex items-center mb-6 font-medium text-gray-50">
            <StarIcon className=" h-10 md:h-12 text-amber-500" />
            <span className="md:text-2xl ml-3">BEST BETTING SITE'S 2024</span>
          </h1>
          <h1 className=" flex items-center mb-6 font-medium text-gray-50">
            <CurrencyRupeeIcon className="h-10 md:h-12 text-blue-500" />
            <span className="md:text-2xl ml-3">LATEST BETTING OFFERS</span>
          </h1>
          <h1 className=" flex items-center mb-6 font-medium text-gray-50">
            <ListBulletIcon className="h-10 md:h-12 text-red-500" />
            <span className="md:text-2xl ml-3">
              IS BETTING LEGAL SITE IN INDIA?
            </span>
          </h1>
        </div>
        <div className="text-start font-medium md:w-6/12 text-gray-50">
          <h1 className="text-2xl mb-2">Welcome to</h1>
          <h1 className="md:text-4xl text-2xl mb-6">
            <span className="text-yellow-400">GAMES</span>
            <span className="text-blue-500">WALLA</span>.in
          </h1>
          <p className="text-md">
            We have created this website in order to help you gamble legally and
            profitably in India. We will provide you with step-by-step guides
            about everything from choosing the right bookmaker to becoming a
            profitable player
          </p>
          <a href='https://wa.link/8l2fxm' className="btn btn-outline btn-primary my-4 hover:text-gray-50">
            Get Bonus Account
          </a>
        </div>
      </div>
    </>
  );
}
