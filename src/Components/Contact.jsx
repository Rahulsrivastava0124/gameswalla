import {PhoneIcon} from '@heroicons/react/24/solid'
import logo from '../Images/Exchmarket-Logo.png'
import React from "react";

export const Contact = () => {
    return (
        <div className="md:my-16 mb-8">
            <h1 className=" text-2xl md:text-4xl font-bold text-gray-800  md:my-16  divider divider-error mx-8 md:mx-72 rounded-2xl my-4 ">Contact </h1>
            <div className="flex  border border-red-500 md:mx-16 mx-2 rounded-md bg-red-800 text-black">
                <div className="md:px-4 px-2 md:m-8  rounded-md w-[100%]">
                    <div className="md:flex justify-center items-center hidden md:d-block">
                        <img src={logo} alt="logo" className="w-[10rem] m-auto md:m-0"/>
                        <h1 className="md:text-3xl text-2xl mb-6">
                            <span className="text-yellow-400">GAMES</span><span className="text-blue-800">WALLA</span>.COM
                        </h1>
                    </div>
                    <div className="justify-center ">
                        <div className=" mb-4">
                            <h1 className="text-3xl md:mb-4 my-2 mr-2">Contact For Support</h1>
                            <span className="flex flex-wrap text-sm justify-between md:justify-center  md:flex-row items-center">

                        <span className="flex md:w-72 p-2 bg-red-100 border border-red-200 mb-2 mr-4 rounded-xl">
                            <PhoneIcon className="h-6 text-red-600"/>
                            <span className=" md:ml:2 md:text-3xl">+919507981942</span>
                        </span>
                            <span
                                className="flex md:w-72  items-center p-2 bg-red-100 border border-red-200 mb-2 w- mr-4 rounded-xl">
                            <PhoneIcon className="h-6 text-red-600"/>
                            <span className=" md:ml-2 md:text-3xl">+919507981942</span>
                            </span>
                            <span
                                className="flex w-[100%] md:w-72 items-center justify-center p-2 bg-red-100 border border-red-200 mb-2 mr-4  rounded-xl">
                            <PhoneIcon className="h-6 text-red-600"/>
                            <span className="text-base md:ml-2 md:text-3xl">+919507981942</span>
                            </span>
                            </span>
                        </div>
                        <div className=" mb-4">
                            <h1 className="text-3xl mb-4 mr-4">Contact For New ID</h1>
                            <span className="flex flex-wrap text-sm justify-center md:flex-row items-center">

                        <span className="flex justify-center  w-[100%] md:w-72  p-2 bg-red-100 border border-red-200 mb-2 mr-4 rounded-xl">
                            <PhoneIcon className="h-6 text-red-600"/>
                            <span className="ml-2 md:text-3xl">+919507981942</span>
                        </span>
                            <span
                                className="flex  justify-center w-[100%] md:w-72  items-center p-2 bg-red-100 border mr-4 border-red-200 mb-2 rounded-xl">
                            <PhoneIcon className="h-6 text-red-600"/>
                            <span className="ml-2 md:text-3xl">+919507981942</span>
                            </span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
