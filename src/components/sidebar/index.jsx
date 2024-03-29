/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import SidebarCard from "./components/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  const companyName = localStorage.getItem('companyName');
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      {/* <div className={`ml-[30px] mr-[50px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <img
              className="h-11"
              src={eslogo}
              alt="Easeweldo Logo"
            />
        </div>
      </div> */}
      <div className={`mx-[30px] mr-[40px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          {/* <img
            className="h-11"
            src={eslogo}
            alt="Easeweldo Logo"
          /> */}
          {companyName}
        </div>
      </div>
      <div className="mt-[70px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
      <div className="flex justify-center">
        <SidebarCard />
      </div>
    </div>
  );
};

export default Sidebar;
