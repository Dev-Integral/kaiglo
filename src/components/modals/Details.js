import React from "react";
import { IoIosArrowDown, IoIosHeartEmpty, IoMdStar } from "react-icons/io";
import { IoBedOutline, IoClose } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { LuBed } from "react-icons/lu";
import { PiInfo, PiPerson } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";

export const Details = ({ openDetails, selectedHome, setOpenDetails }) => {
  const closeModal = () => {
    document.body.style.overflow = "";
    setOpenDetails(!openDetails);
  };
  if (!openDetails) return null;
  return (
    <div
      className="modal-overlay flex justify-end"
      onClick={() => closeModal()}
    >
      <div className="flex justify-end w-11/12 slide-ins">
        <div className="absolute 1/12 absolute left-[5%] top-[5%]">
          <div
            className="flex items-center justify-center bg-white rounded-full w-8 h-8 hover:bg-black hover:text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <IoClose />
          </div>
        </div>
        <div
          className="ml-6 bg-white overflow-y-scroll"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-5 p-8">
            <div className="w-[60%] relative">
              <img
                className=" w-full rounded-2xl h-[450px]"
                src={selectedHome.image}
                alt="asset"
              />
              <span className="absolute bottom-8 left-6 p-2 bg-white rounded-2xl">
                View All Photos
              </span>
            </div>
            <div className="flex flex-col h-[450px] w-[40%] gap-4 justify-between">
              <div className="w-full ">
                <img
                  src={selectedHome.image}
                  className="w-full h-[215px] rounded-2xl"
                  alt="asset"
                />
              </div>
              <div className="w-full ">
                <img
                  src={selectedHome.image}
                  className="w-full h-[215px] rounded-2xl"
                  alt="asset"
                />
              </div>
            </div>
          </div>
          <div className="pl-8 pr-8">
            <span className="border p-1 pl-4 pr-4 rounded-xl">Superhost</span>
            <div className="flex">
              <div className="relative w-full pt-4 pb-4">
                <span className="absolute bg-gray-100 rounded-full p-2">
                  <IoIosHeartEmpty />
                </span>
                <span className="absolute left-10 bg-gray-100 rounded-full p-2">
                  <MdOutlineLogin />
                </span>
                <div className="mt-16 border-b mr-4 mb-4">
                  <p className="text-xl font-bold mb-2">{selectedHome?.name}</p>
                  <p className="text-sm text-gray-500 mb-8">
                    {selectedHome?.address}
                  </p>
                  <p className="mb-6 flex items-center gap-1">
                    <PiPerson /> 16+ guests
                  </p>
                  <p className="mb-6 flex items-center gap-1">
                    <LuBed /> 8 bedrooms
                  </p>
                  <p className="mb-6 flex items-center gap-1">
                    <IoBedOutline /> 8 beds
                  </p>
                  <p className="mb-6">8 baths</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl border p-6 w-full">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-2xl font-semibold">
                    $10,000 <span className="font-normal text-sm">/ night</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <IoMdStar /> {selectedHome.star}.0
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 mb-1">
                  <p className="text-[12px] text-gray-500">Check in</p>
                  <p className="text-[12px] text-gray-500">Check out</p>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="w-full flex hover:border gap-4 items-center bg-white p-3 pl-5 pr-5 rounded-lg">
                    <p>
                      <CiCalendar size={20} />
                    </p>
                    <p>June 14 - 21</p>
                  </div>
                  <div className=" w-full flex hover:border gap-4 items-center bg-white p-3 pl-5 pr-5 rounded-lg">
                    <p>
                      <CiCalendar size={20} />
                    </p>
                    <p>June 14 - 21</p>
                  </div>
                </div>
                <div className="border-b pb-12">
                  <div className="grid grid-cols-2 gap-4 mt-4 mb-1">
                    <p className="text-[12px] text-gray-500">Guests</p>
                  </div>
                  <div className="w-full flex hover:border gap-4 items-center justify-between bg-white p-3 pl-5 pr-5 rounded-lg">
                    <p>1 Guests</p>
                    <p>
                      <IoIosArrowDown />
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm flex items-center gap-1">
                      6 nights <PiInfo />{" "}
                    </p>
                    <p>$21,199</p>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm flex items-center gap-1">
                      Cleaning fee <PiInfo />{" "}
                    </p>
                    <p>$85</p>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-sm flex items-center gap-1">
                      Airbnb service fee <PiInfo />{" "}
                    </p>
                    <p>$322</p>
                  </div>
                </div>
                <div className="mt-6 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-lg font-bold flex items-center gap-1">
                      Total
                    </p>
                    <p>$2,606</p>
                  </div>
                  <div>
                    <p className="text-sm mb-3 text-gray-500">Before Taxes</p>
                    <button className="w-full rounded-xl p-2 text-white bg-[#FF5A5F]">Reserve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
