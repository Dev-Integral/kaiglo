import React from "react";
import { IoClose } from "react-icons/io5";

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
            className="flex items-center justify-center bg-white rounded-full w-8 h-8 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <IoClose />
          </div>
        </div>
        <div className="ml-6 bg-white overflow-y-scroll" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-5 h-screen p-8">
            <div className="w-[60%] relative">
              <img className=" w-full rounded-2xl h-[450px]" src={selectedHome.image} />
              <span className="absolute bottom-24 left-6 p-2 bg-white rounded-2xl">View All Photos</span>
            </div>
            <div className="flex flex-col h-[450px] w-[40%] gap-4 justify-between">
              <div className="w-full "><img src={selectedHome.image} className="w-full h-[215px] rounded-2xl" /></div>
              <div className="w-full "><img src={selectedHome.image} className="w-full h-[215px] rounded-2xl" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
