"use client";
import { mockTableData } from "@/api/TableData";
import CalendarIcon from "@/assets/svg/CalendarIcon";
import Button from "@/common/Button";
import DraggablePanel from "@/components/draggablePanel/DraggablePanel";
import Searchbar from "@/components/filter/Searchbar";
import Sidebar from "@/components/filter/Sidebar";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";
import Table from "@/container/dashboard/Table";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const QueryBuilder = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const addFilter = (filter: string) => {
    setFilters([...filters, filter]);
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-2 border-gray-300 border rounded-xl">
        <DraggablePanel />

        <div className="relative">
          <div className=" flex flex-wrap gap-2 py-2">
            {filters.map((filter, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white px-2 py-1 rounded-lg flex items-center"
              >
                {filter}
                <Button
                  className="ml-2 text-sm"
                  onClick={() => removeFilter(filter)}
                  data-testid={""}
                >
                  &times;
                </Button>
              </div>
            ))}
            {filters.length > 0 && (
              <Button
                className="bg-red-500 text-white px-2 py-1 rounded-full"
                onClick={clearFilters}
                children={"Clear All"}
                data-testid={""}
              />
            )}
          </div>
          <Button
            onClick={toggleDropdown}
            className="px-2 rounded-lg text-md flex justify-center items-center gap-2 font-medium  bg-[#eae8fb]"
            data-testid="toggle-dropdown"
          >
            <span className="font-medium text-xl  text-[#4f44e0]">+</span>
            <span className="text-sm  text-[#4f44e0]"> Filter</span>
          </Button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-[90vmin] h-auto bg-white shadow-lg rounded-md overflow-hidden z-10 border-gray-600">
              {/* Searchbar */}
              <Searchbar />
              <div className="flex">
                {/* Sidebar */}
                <Sidebar />
                {/* Vertical Divider */}
                <div className="w-px h-auto bg-gray-300 my-1 mx-3"></div>
                {/* Recent */}
                <div className="w-3/4 p-4">
                  <span className="text-xs">Recent</span>

                  <Button
                    onClick={() => {
                      addFilter("First Seen");
                      toggleDropdown();
                    }}
                    className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-sm rounded-sm"
                    data-testid={"add-first-seen-filter"}
                  >
                    {/* Calendar Icon svg */}
                    <CalendarIcon />
                    <span className="text-black text-sm"> First Seen</span>
                  </Button>
                  {/* Horizontal Divider */}
                  <div className="border-t border-gray-300 my-1 "></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default QueryBuilder;
