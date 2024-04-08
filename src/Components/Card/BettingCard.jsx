import { ArrowUpRight, ArrowRight } from "lucide-react";
import React from "react";

export default function BettingCard(props) {
  let list1 = props.data.list.slice(0, 5);
  let list2 = props.data.list.slice(5, props.data.list.length);
  return (
    <>
      <div className="flex  my-6 flex-col items-center border-red-500 rounded-md border bg-gray-50 bg-[url('./Images/CardBackground.png')]">
        <div className="">
          <img
            src={props.data.images}
            alt="Laptop"
            className="md:w-[15rem] h-[8rem] w-[15rem] mt-1 mx-1 rounded-md object-contain"
          />
          <div className="relative bg-red-200 rounded-md p-1 text-yellow-800"><span>{props.data.bonus}</span></div>
        </div>
        <div className="md:w-[27rem]">
          <div className="p-4  ">
            <h1 className="inline-flex mb-4 items-center text-lg font-semibold">
              <a href={props.data.goToWebsite} className="flex text-medium text-blue-400">
                {" "}
                {props.data.name} <ArrowUpRight className="ml-2 h-4 w-4" />{" "}
              </a>
            </h1>
            <div className="flex justify-between flex-wrap md:flex-nowrap text-left font-medium text-gray-600 md:w-[25rem] md:px-6 px-4 mb-6">
              <ul className="list-disc md:mr-8 ">
                {list1.map((data, index) => {
                  return <li key={index}> {data} </li>;
                })}
              </ul>
              <ul className="list-disc  ">
                {list2.map((data, index) => {
                  return <li key={index}> {data} </li>;
                })}
              </ul>
            </div>

            <div className="mt-3 flex items-center space-x-2">
              <span>
                <a
                href={props.data.moreInfo}
                  type="button"
                  className="inline-flex items-center rounded-md bg-gray-600 px-2 py-1 text-sm font-semibold text-white hover:bg-black/80"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                href={props.data.getAccount}
                  type="button"
                  className="inline-flex items-center rounded-md bg-blue-600 ml-4 px-2 py-1 text-sm font-semibold text-white hover:bg-blue-700"
                >
             Get Account

                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
