import { mockTableData } from "@/api/TableData";
import CalendarIcon from "@/assets/svg/CalendarIcon";
import DeleteIcon from "@/assets/svg/DeleteIcon";
import EventIcon from "@/assets/svg/EventIcon";
import Button from "@/common/Button";
import DraggablePanel from "@/components/draggablePanel/DraggablePanel";
import Searchbar from "@/components/filter/Searchbar";
import Sidebar from "@/components/filter/Sidebar";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Filter from "./Filter";

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
    <div>
      <Filter />
      <DndProvider backend={HTML5Backend}>
        <div className="p-2 border-gray-300 border rounded-xl">
          <DraggablePanel />

          <div className="relative">
            <div className=" flex flex-wrap gap-2 py-2">
              {filters.map((filter, index) => (
                <div
                  key={index}
                  className="bg-gray-200 text-gray-500 px-2  rounded-lg flex items-center text-xs"
                >
                  {filter}
                  <Button
                    className="ml-2 text-xs text-gray-500"
                    onClick={() => removeFilter(filter)}
                    data-testid={""}
                  >
                    &times;
                  </Button>
                </div>
              ))}
              {filters.length > 0 && (
                //Delete Icon Svg
                <DeleteIcon onClick={clearFilters} />
              )}
            </div>
            <Button
              onClick={toggleDropdown}
              className="px-2 rounded-lg text-md flex justify-center items-center gap-2 font-medium  bg-[#eae8fb]"
              data-testid={""}
            >
              <span className="font-medium text-xl  text-[#463dbb]">+</span>
              <span className="text-sm  text-[#463dbb]"> Filter</span>
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
                      data-testid={""}
                    >
                      {/* Calendar Icon svg */}
                      <EventIcon />
                      <span className="text-black text-xs"> First Seen</span>
                    </Button>
                    {/* Horizontal Divider */}
                    <div className="border-t border-gray-300 my-1 "></div>
                    <span className="text-xs">All properties</span>
                    <div>
                      <Button
                        onClick={() => {
                          addFilter("First Seen");
                          toggleDropdown();
                        }}
                        className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-xs rounded-sm"
                        data-testid={""}
                      >
                        {/* Calendar Icon svg */}
                        <svg
                          width={16}
                          height={16}
                          color="#463dbb"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22"
                        >
                          <path
                            d="M18 14.894V9.78c0-2.119-3.77-2.119-4.308-.53"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M18 11.367c-2.543-.53-4.577.045-4.577 1.78 0 2.257 3.77 1.853 4.577.424v-2.204z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d="M4 15l1.077-3M11 15l-1.077-3m0 0L7.86 6.253A.383.383 0 007.5 6v0a.383.383 0 00-.36.253L5.077 12m4.846 0H5.077"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                        <span className="text-black text-xs">Name</span>
                      </Button>
                      <Button
                        onClick={() => {
                          addFilter("First Seen");
                          toggleDropdown();
                        }}
                        className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-xs rounded-sm"
                        data-testid={""}
                      >
                        {/* Calendar Icon svg */}
                        <svg
                          width={16}
                          height={16}
                          color="#463dbb"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22 22"
                        >
                          <path
                            d="M18 14.894V9.78c0-2.119-3.77-2.119-4.308-.53"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M18 11.367c-2.543-.53-4.577.045-4.577 1.78 0 2.257 3.77 1.853 4.577.424v-2.204z"
                            stroke="currentColor"
                            stroke-width="1.5"
                          ></path>
                          <path
                            d="M4 15l1.077-3M11 15l-1.077-3m0 0L7.86 6.253A.383.383 0 007.5 6v0a.383.383 0 00-.36.253L5.077 12m4.846 0H5.077"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                        <span className="text-black text-xs">Distinct ID</span>
                      </Button>
                      <Button
                        onClick={() => {
                          addFilter("First Seen");
                          toggleDropdown();
                        }}
                        className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-xs rounded-sm"
                        data-testid={""}
                      >
                        {/* Calendar Icon svg */}
                        <EventIcon />
                        <span className="text-black text-xs"> Event ▸ </span>
                        <span className="text-black text-xs">
                          {" "}
                          Session Start
                        </span>
                      </Button>
                      <Button
                        onClick={() => {
                          addFilter("First Seen");
                          toggleDropdown();
                        }}
                        className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-xs rounded-sm"
                        data-testid={""}
                      >
                        {/* Calendar Icon svg */}
                        <EventIcon />
                        <span className="text-black text-xs"> Event ▸</span>
                        <span className="text-black text-xs">Session End</span>
                      </Button>
                      <Button
                        onClick={() => {
                          addFilter("First Seen");
                          toggleDropdown();
                        }}
                        className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-xs rounded-sm"
                        data-testid={""}
                      >
                        {/* Calendar Icon svg */}
                        <EventIcon />
                        <span className="text-black text-xs"> Event ▸</span>
                        <span className="text-black text-xs">Any Event</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default QueryBuilder;
