import React, { useState } from "react";
import { homes } from "../utils/homes";
import { IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { Details } from "./modals/Details";

export const Stays = () => {
  const [toggleShadow, setToggleShadow] = useState("");
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedHome, setSelectedHome] = useState({});

  const handleClick = (home) => {
    document.body.style.overflow = 'hidden';
    setSelectedHome(home);
    setOpenDetails(!openDetails);
  };

  return (
    <div className="w-full m-8">
      <div id="stays" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {homes.map((home, key) => (
          <div
            onMouseEnter={() => setToggleShadow(key)}
            onMouseLeave={() => setToggleShadow("")}
            onClick={() => handleClick(home)}
            key={key}
            className={`relative ${
              toggleShadow === key ? "shadow-lg" : ""
            } border rounded-[20px] cursor-pointer`}
          >
            <span className="absolute right-4 top-4 rounded-full bg-white hover:bg-black hover:text-white cursor-pointer font-bold text-xl p-2">
              <IoIosHeartEmpty />
            </span>
            <img
              src={home.image}
              className="w-full cover h-[200px] rounded-t-[20px]"
              alt="asset_1"
            />
            <div className="p-5">
              <p className="mr-16 mb-2 text-lg font-semi-bold">{home.name}</p>
              <p className="text-sm pb-6 text-gray-500">{home?.address}</p>
              <div className="mt-8">
                <p className="absolute bottom-4 text-sm font-semi-bold">
                  ${home.amount} /{" "}
                  <span className="bold-none text-gray-500">night</span>
                </p>
                <p className="absolute bottom-4 right-5 flex items-center gap-1">
                  <IoMdStar /> {home.star}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Details
        selectedHome={selectedHome}
        setSelectedHome={setSelectedHome}
        openDetails={openDetails}
        setOpenDetails={setOpenDetails}
      />
    </div>
  );
};
