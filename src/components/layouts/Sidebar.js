import {
  ArrowDownIcon,
  BellAlertIcon,
  BoltIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";

import React from "react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

function Sidebar() {
  return (
    <div
      style={{
        boxShadow: "0 1px 10px 2px hsla(0, 0%, 0%, 0.3) inset",
        // height: "90vh",
        marginBottom: "50px",
      }}
      className=" h-full hidden md:flex flex-col  rounded-lg bg-teal-100 lg:w-4/12 md:w-5/12 xl:w-3/12 2xl:w-3/12 p-5 mt-1 ml-2 items-center justify-between"
    >
      <div className="h-full">
        <div className="flex items-center justify-between w-full mb-2 pb-1 border-b-2 bg-teal-900 rounded-lg text-white">
          <div className="flex justify-center items-center py-2 px-3 ">
            <Image
              src="/ishnaaz-Recovered.png"
              alt="logo"
              className="inline-block  rounded-xl mx-5 bg-teal-50 "
              width="50"
              height="50"
              objectFit="contain"
              layout="fixed"
              priority="true"
            />
            <div className="flex flex-col ml-3">
              <h5 className="font-bold text-xl">Ishnaaz Limited</h5>
              <p className=" font-thin">Accounting Page</p>
            </div>
          </div>
          <div>
            <img
              className="mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
              src="/ChevronUpDown.svg"
              alt=""
            />
          </div>
        </div>
        <div
          style={{ boxShadow: "0 1px 10px 2px hsla(0, 0%, 0%, 0.3) inset" }}
          className="rounded-lg mb-5 border-0 flex items-center w-full justify-around overflow-hidden"
        >
          <MagnifyingGlassIcon className="mr-1 ml-2 h-5 w-5 text-teal-600" />
          <input
            type="text"
            className="border-0 bg-transparent focus:ring-0 text-base  text-teal-800 "
            placeholder="Search"
          />
          <ArrowDownIcon className="mr-1 ml-2 h-5 w-5 text-teal-600 " />
        </div>
        <div className="w-full justify-center items-center mb-2">
          <div className="flex items-center px-4 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <EnvelopeIcon className="mr-5 ml-2 h-7 w-7 text-teal-600 " />
            <h2 className=" text-2xl indent-3"> Inbox</h2>
          </div>
        </div>
        <div className="w-full justify-center items-center mb-2 ">
          <div className="flex items-center px-4 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <BellAlertIcon className="mr-5 ml-2 h-7 w-7 text-teal-600 " />
            <h2 className=" text-2xl indent-3"> Activity</h2>
          </div>
        </div>
        <div className="w-full justify-center items-center mb-2 pb-3 border-b-2">
          <div className="flex items-center px-4 hover:bg-teal-200 cursor-pointer py-1 rounded-lg ">
            <CalendarDaysIcon
              className="mr-5 ml-2 h-7 w-7 text-teal-600 "
              alt="square Stack"
            />
            <h2 className=" text-2xl indent-3"> Schedule</h2>
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <h3 className="text-xl text-gray-500 font-semibold ">Shared</h3>
          <div className="flex items-center px-4 mb-2 mt-4 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <BoltIcon className="mr-5 ml-2 h-7 w-7 text-teal-600 " />
            <h2 className=" text-2xl indent-3"> Boost</h2>
          </div>
          <div className="flex items-center px-4 mb-2 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <BookmarkIcon className="mr-5 ml-2 h-7 w-7 text-teal-600 " />
            <h2 className=" text-2xl indent-3"> Documents</h2>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h3 className="text-xl text-gray-500 font-semibold ">Projects</h3>
          <div className="flex items-center px-4 mb-2 mt-4 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <i
              style={{ boxShadow: "0 1px 10px 2px hsla(0, 0%, 0%, 0.3) inset" }}
              className="mr-5 ml-2 h-7 w-7 bg-teal-300 rounded-lg"
            />
            <h2 className=" text-2xl indent-3"> Personal</h2>
          </div>
          <div className="flex items-center px-4 mb-2  hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <i
              style={{ boxShadow: "0 1px 10px 2px hsla(0, 0%, 0%, 0.3) inset" }}
              className="mr-5 ml-2 h-7 w-7 bg-purple-400 rounded-lg"
            />
            <h2 className=" text-2xl indent-3"> Business</h2>
          </div>
          <div className="flex items-center px-4 mb-2  hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <i
              style={{ boxShadow: "0 1px 10px 2px hsla(0, 0%, 0%, 0.3) inset" }}
              className="mr-5 ml-2 h-7 w-7 bg-pink-300 rounded-lg"
            />
            <h2 className=" text-2xl indent-3"> Travel</h2>
          </div>
          <div className="flex items-center px-4 mb-2  hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
            <i
              style={{ boxShadow: "0 1px 10px 2px hsla(0, 0%, 0%, 0.3) inset" }}
              className="flex mr-5 ml-1 h-8 w-9  rounded-lg text-gray-500 text-center items-center justify-center"
            >
              <PlusSmallIcon className="w-5 h-5 " />
            </i>
            <h5 className=" text-xl indent-3 text-gray-400">
              {" "}
              Add New Project
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full border-t-2 ">
        <div className="flex items-center px-4 mb-2 mt-2 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
          <WrenchIcon className="mr-5 ml-2 h-7 w-7 text-teal-600 " />
          <h2 className=" text-2xl indent-3"> Settings</h2>
        </div>
        <div className="flex items-center px-4 mb-2 mt-2 hover:bg-teal-200 cursor-pointer py-1 rounded-lg">
          <InformationCircleIcon className="mr-5 ml-2 h-7 w-7 text-teal-600 " />
          <h2 className=" text-2xl indent-3"> Help</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
