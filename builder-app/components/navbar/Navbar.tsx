// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import LogoIcon from "../../assets/svg/icons/LogoIcon";
import SearchIcon from "../../assets/svg/icons/searchIcon";
import DropdownIcon from "../../assets/svg/icons/dropDownIcon";
import DataManagement from "../../assets/svg/icons/DataManagement";
import ApplicationIcon from "../../assets/svg/icons/ApplicationIcon";
import HelpIcon from "../../assets/svg/icons/HelpIcon";
import SettingIcon from "../../assets/svg/icons/SettingIcon";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="py-4 pl-6 pr-8 flex items-center justify-between"
      style={{
        background: "#4f44e0",
        position: "sticky",
        top: 0,
        zIndex: 9999,
      }}
    >
      {/* Left section with logo and links */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="container px-2 cursor-pointer">
          <svg className="h-8 w-8 text-white">
            <svg
              width="28px"
              height="28px"
              viewBox="0 0 50 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.947 19.0741H21.0659C19.538 18.1182 18.9659 16.7786 18.1983 14.2949L15.9029 5.78643C14.8529 1.96306 13.9912 0.145508 9.78402 0.145508H0.993164V2.44098H2.23866C4.81653 2.44098 5.10618 3.39682 5.87375 6.26435L7.87957 13.7228C8.92955 17.3579 10.5588 19.0741 14.9543 19.0741H14.947ZM29.1036 19.0741H35.2152C39.6106 19.0741 41.1385 17.3507 42.1958 13.7228L44.2016 6.26435C44.9691 3.39682 45.3457 2.44098 47.8367 2.44098H49.0822V0.145508H40.3855C36.0842 0.145508 35.2225 1.86892 34.2666 5.78643L31.9711 14.2949C31.2036 16.8727 30.6315 18.1182 29.1036 19.0741ZM21.0659 27.0974H29.1038L29.1036 19.0741H21.0659V27.0974ZM0.993164 46.0259H9.78402C13.9912 46.0259 14.8529 44.2084 15.9029 40.385L18.1983 31.8766C18.9659 29.3928 19.538 28.0532 21.0659 27.0974H14.947C10.5516 27.0974 8.92231 28.8208 7.87233 32.4486L5.86651 39.9071C5.09894 42.7746 4.81653 43.7305 2.23141 43.7305H0.993164V46.0259ZM40.371 46.0259H49.0677V43.7305H47.8222C45.3384 43.7305 44.9547 42.7746 44.1871 39.9071L42.1813 32.4486C41.1313 28.8135 39.6034 27.0974 35.2007 27.0974H29.1038C30.6317 28.0532 31.1818 29.2987 31.9494 31.8766L34.2449 40.385C35.2007 44.3025 36.0624 46.0259 40.3637 46.0259H40.371Z"
                fill="currentColor"
              ></path>
            </svg>
          </svg>
        </div>
        {/* Links */}
        <div className="items-center justify-center flex">
          <div className="text-white text-sm mr-8">Board</div>
          <div className="text-white text-sm mr-8">Reports</div>
          <div className="text-white text-sm mr-8">Users</div>
          <div className="text-white text-sm">Events</div>
        </div>
      </div>

      {/* Searchbar */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-1/2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search ctrl K"
            className="block w-full pl-10 px-3 py-2 bg-[#463dbb] text-white focus:outline-none placeholder-white rounded-lg"
          />
        </div>
      </div>

      {/* Right section with dropdown settings */}
      <div className=" flex flex-row ml-8 gap-7 items-center">
        <div className="relative">
          <DataManagement />
        </div>
        <div className="relative">
          <ApplicationIcon />
        </div>
        <div className="relative">
          <HelpIcon />
        </div>
        {/* <div className="relative">
          <SettingIcon />
        </div> */}

        {/* <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none flex flex-row gap-3"
          >
            <div className="text-xs text-white flex flex-col text-start">
              <span>test</span>
              <span>All Project Data</span>
            </div>
            <DropdownIcon />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </div>
            </div>
          )}
        </div> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
