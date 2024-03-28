import React, { useState } from "react";
import { SiAirbnb, SiFlux } from "react-icons/si";
import { TbWindow } from "react-icons/tb";
import { PiWarehouseThin, PiCookingPotThin, PiSwimmingPoolLight, PiCastleTurretLight } from "react-icons/pi";
import { MdOutlineSurfing } from "react-icons/md";
import { GiCampingTent, GiDesert, GiFamilyHouse, GiFarmer, GiIsland, GiTreehouse, GiVines } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { LiaSkiingSolid } from "react-icons/lia";

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
        className={`border-r flex flex-col p-5 pl-0 pr-0 justify-center items-center ${
          isOpen ? "w-52" : "w-20"
        } transition-all duration-300`}
      >
        <div
          className={`w-full flex items-center justify-${
            isOpen ? "start pl-8 pt-2 pb-2" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}
          style={{ borderRight: "3px solid #FF5A5F" }}
        >
          <SiAirbnb size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>All Homes</span>
        </div>
        <div
          className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}
        >
          <TbWindow size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Amazing views</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <PiWarehouseThin size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Tiny Homes</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <PiCookingPotThin size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Chef's Kitchen</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <MdOutlineSurfing size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Surfing</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiFamilyHouse size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Mansions</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <SiFlux size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Luxe</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiTreehouse size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Treehouses</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiCampingTent size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Camping</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <FaUmbrellaBeach size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Beach Fronts</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiFarmer size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Farms</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <PiCastleTurretLight size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Castles</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiIsland size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Island</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiVines size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Vineyards</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <PiSwimmingPoolLight size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Amazing Pools</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <LiaSkiingSolid size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Skiing</span>
        </div>
        <div className={`w-full flex items-center justify-${
            isOpen ? "start pl-8" : "center"
          } h-14 cursor-pointer hover:bg-gray-100`}>
          <GiDesert size={20} />
          <span className={`${isOpen ? "ml-2" : "hidden"}`}>Desert</span>
        </div>
      </div>
    </div>
  );
};
