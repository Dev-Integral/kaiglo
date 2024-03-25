import React, { useState } from "react";
import { SiAirbnb, SiFlux } from "react-icons/si";
import { TbWindow } from "react-icons/tb";
import { PiWarehouseThin, PiCookingPotThin } from "react-icons/pi";
import { MdOutlineSurfing } from "react-icons/md";
import { GiCampingTent, GiFamilyHouse, GiTreehouse } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onMouseEnter={() => toggleSidenav()}
        onMouseLeave={() => toggleSidenav()}
        className={`border-r flex flex-col p-5 pl-0 pr-0 justify-start items-center ${
          isOpen ? "w-52" : "w-20"
        } transition-all duration-300 h-screen`}
      >
        <div
          className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 hover:bg-gray-100`}
          style={{ borderRight: "3px solid #FF5A5F" }}
        >
          <SiAirbnb size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>All Homes</span>
        </div>
        <div
          className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 hover:bg-gray-100`}
        >
          <TbWindow size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Amazing views</span>
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <PiWarehouseThin size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <PiCookingPotThin size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <MdOutlineSurfing size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <GiFamilyHouse size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <SiFlux size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <GiTreehouse size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <GiCampingTent size={20} />
        </div>
        <div className={`w-full flex items-center justify-center h-14 hover:bg-gray-100`}>
          <FaUmbrellaBeach size={20} />
        </div>
      </div>
    </div>
  );
};
