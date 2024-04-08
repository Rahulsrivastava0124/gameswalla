import React from "react";
import Exchmarket from "../Images/Exchmarket.webp";
import SSExchange from "../Images/ssexchange.webp";
import skyExchange from "../Images/Sky-Exchange-Logo.webp";
import mony777 from "../Images/mony777-1.webp";
import Lotusbook247 from "../Images/lotusbook247.webp";
import Satfair from "../Images/satfair.webp";
import satsport247 from "../Images/satsport.webp";
import Betxhub from "../Images/Betxhub247.webp";
import Diamond from "../Images/Diamond-Exch.webp";

import BattingCard from "./Card/BettingCard";

export default function BettingSites() {
  const bettingSiteList = [
    {
      id: 1,
      name: "Exchmarket.net",
      images: Exchmarket,
      list: [
        "India’s Top Gaming Platform Fully Automatic Website",
        "Free Self Registration",
        "Self deposit/withdrawal",
        "Start Your ID With 500/- INR",
        "Nonstop Game Available",
        "4000+ Casino Games",
        "24*7 Customer Support",
        "Enormous jackpots waiting for you at GamesWalla.net!",
        "Great welcome bonus offer for new players",
        "Amazing selection of casino games available",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"100% Bonus Up to ₹20,000"
    },
    {
      id: 2,
      name: "SS Exchange",
      images: SSExchange,
      list: [
        "Enormous jackpots waiting for you at SS Exchange!",
        "Amazing selection of casino games available",
        "Great welcome bonus offer for new players",
        "The sports book is great, but a bit small",
        "The number of deposit options are a big limited",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹10,000"
    },
    {
      id: 3,
      name: "Sky Exchange",
      images: skyExchange,
      list: [
        "Excellent mobile gambling experience",
        "Huge selection of slot machine games",
        "Very user-friendly platform",
        "Limited sports betting options",
        "Not that many promotions to take advantage of Sky Exchange",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹10,000"
    },
    {
      id: 4,
      name: "Mony777",
      images: mony777,
      list: [
        "Enormous jackpots waiting for you at Mony777!",
        "Amazing selection of casino games available",
        "Great welcome bonus offer for new players",
        "Best play Casino Bonus",
        "The sports book is great, but a bit small",
        "The number of deposit options are a big limited",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹10,000"
    },
    {
      id: 5,
      name: "Lotusbook247",
      images: Lotusbook247,
      list: [
        "Very user-friendly. Great for beginners!",
        "Huge selection of odds on cricket and other sports",
        "Great deposit options; Bank transfer, UPI, E wallets and more",
        "Difficult to contact customer service",
        "A limited number of promotions available",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹10,000"
    },
    {
      id: 6,
      name: "Satfair",
      images: Satfair,
      list: [
        " Great welcome bonus offer for new players",
        "Enormous jackpots waiting for you at SATfair!",
        "Amazing selection of casino games available",
        "The sports book is great, but a bit small",
        " The number of deposit options are a big limited",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹10,000"
    },
    {
      id: 7,
      name: "satsport247",
      images: satsport247,
      list: [
        "Self deposit/withdrawal",
        "Enormous jackpots waiting for you at SATsport247!",
        "Great welcome bonus offer for new players",
        "Amazing selection of casino games available",
        "Self deposit/withdrawal",
        "Enormous jackpots waiting for you at SATsport247!",
        "Great welcome bonus offer for new players",
        "Amazing selection of casino games available",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹10,000"
    },
    {
      id: 8,
      name: "Betxhub 247",
      images: Betxhub,
      list: [
        "Enormous jackpots waiting for you at BetXhub247!",
        " Amazing selection of casino games available",
        " Great welcome bonus offer for new players",
        "The sports book is great, but a bit small",
        "The number of deposit options are a big limited",
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹3,000"
    },
    {
      id: 9,
      name: "Diamond Exch",
      images: Diamond,
      list: [
       ' Enormous jackpots waiting for you at Diamond Exch!',
       ' Amazing selection of casino games available',
        'Great welcome bonus offer for new players',
        'The sports book is great, but a bit small',
        'The number of deposit options are a big limited',
      ],
      getAccount: "",
      goToWebsite: "",
      moreInfo: "",
      bonus:"Up to ₹3,000"
    },
  ];

  return (
    <>
      <h1 className=" text-red-700 font-bold sm:my-12 my-8 md:text-4xl text-2xl bg-gray-200  p-3 mx-8 md:mx-16 rounded-2xl">
        Best Betting Sites In India
      </h1>
      <div className="mx-6 flex flex-wrap justify-evenly">
        {bettingSiteList.map((data) => (
          <BattingCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}
