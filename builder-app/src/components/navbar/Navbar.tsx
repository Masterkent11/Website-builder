// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import LogoIcon from "@/assets/svg/LogoIcon";
import SearchIcon from "@/assets/svg/searchIcon";
import DropdownIcon from "@/assets/svg/dropDownIcon";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="py-4 px-6 flex items-center justify-between"
      style={{ background: "#4f44e0" }}
    >
      {/* Left section with logo and links */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="container px-2 cursor-pointer">
          <LogoIcon />
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
      <div className="ml-8">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            <DropdownIcon />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
