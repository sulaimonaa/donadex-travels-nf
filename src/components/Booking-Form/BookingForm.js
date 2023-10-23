import React from "react";
import { BiSolidPlaneTakeOff } from 'react-icons/bi';
import RoundTrip from "./RoundTrip";
import OneWay from "./OneWay";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>  
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-[1px] flex-row w-full md:w-3/5"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded flex gap-4 leading-normal rounded-es-none rounded-ee-none " +
                  (openTab === 1
                    ? "text-white bg-sky-500/75 -600"
                    : "text-white -600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               <BiSolidPlaneTakeOff /> Round Trip
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded flex gap-4 leading-normal rounded-es-none rounded-ee-none " +
                  (openTab === 2
                    ? "text-white bg-sky-500/75 -600"
                    : "text-white -600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <BiSolidPlaneTakeOff/> One-way
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-sky-500/75 w-full mb-6 shadow-lg rounded rounded-ss-none">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <RoundTrip />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <OneWay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BookingForm = () => {
  return (
    <>
        <Tabs />
    </>
  );
}

export default BookingForm;