import React from "react";
import { Airbnb } from "./Airbnb";
import { FaUser } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
      <div className="border-b p-5 pl-10 pr-10">
        <div className="flex justify-between items-center">
          <Airbnb color="#FF5A5F" />
          <div>
            <span
              className="font-bold mr-8 p-6 pl-0 pr-0"
              style={{ borderBottom: "3px solid #FF5A5F" }}
            >
              Stays
            </span>
            <span className="p-6 pl-0 pr-0 text-gray-600">Experiences</span>
            <span className="ml-8 p-6 pl-0 pr-0 text-gray-600">
              Online experiences
            </span>
          </div>
          <span className="rounded-full border p-2 bg-slate-300">
            <FaUser />
          </span>
        </div>
      </div>
      <div className="border-b p-3 pl-10 pr-10">
        <div className="flex justify-between items-center">
          <div className="bg-gray-100 rounded-lg flex items-center gap-4">
            <p className="text-white bg-black h-full p-2 rounded-lg">
              <CgMenuGridR size={30} />
            </p>
            <p className="text-gray-600 pr-1 rounded-lg">
              <HiOutlineArrowTrendingUp size={25} />
            </p>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="flex gap-16 items-center bg-gray-100 p-3 pl-5 pr-5 rounded-lg">
              <p>Anywhere</p>
              <p>
                <IoIosArrowDown />
              </p>
            </div>
            <div className="flex gap-4 items-center bg-gray-100 p-3 pl-5 pr-5 rounded-lg">
              <p>
                <CiCalendar size={20} />
              </p>
              <p>June 14 - 21</p>
            </div>
            <div className="flex gap-4 items-center bg-gray-100 p-3 pl-5 pr-5 rounded-lg">
              <p className="p-2 rounded-lg text-[#FF5A5F] bg-white">
                <FaMinus size={12} />
              </p>
              <p>4 guests</p>
              <p className="p-2 rounded-lg text-[#FF5A5F] bg-white">
                <FaPlus size={12} />
              </p>
            </div>
          </div>
          <span className="text-gray-600 rounded-lg p-3 bg-gray-100">
            <CiFilter size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};
