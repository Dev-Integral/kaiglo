import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export const Filter = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 overflow-scroll" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed bg-transparent" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="w-1/3 absolute right-0 top-[26%] h-full slide-ins slide-out">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  transform bg-white p-3 text-left align-middle shadow-xl">
                  <Dialog.Title as="h3" className="relative p-3">
                    <div>
                      <div className="flex justify-between border-b pb-3 items-center">
                        <span className="font-medium">Filters</span>
                        <span className="text-[12px] text-[#D33B50]">
                          Clear All
                        </span>
                      </div>
                      <p className="font-medium mt-4">Price range</p>
                      <p className="text-[14px] text-gray-500">
                        The average nightly price is $133
                      </p>
                      <div className="flex justify-between gap-4 border-b pb-6">
                        <div className="w-full">
                          <p>Min Price</p>
                          <p className="p-3 border rounded-xl">$0</p>
                        </div>
                        <div className="w-full">
                          <p>Max Price</p>
                          <p className="p-3 border rounded-xl">$0</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium mt-4 mb-4">Type of place</p>
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            className="outline-none w-6 h-6"
                          />
                          <div>
                            <p>Entire Place</p>
                            <p className="text-gray-500">
                              A place all to yourself
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            className="outline-none w-6 h-6"
                          />
                          <div>
                            <p>Private room</p>
                            <p className="text-gray-500">
                              Your own room in a home or a hotel, plus some
                              shared common spaces.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            className="outline-none w-6 h-6"
                          />
                          <div>
                            <p>Shared room</p>
                            <p className="text-gray-500">
                              A sleeping space and common areas that may be
                              shared with others.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 z-4">dfdf</div>
                    </div>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
