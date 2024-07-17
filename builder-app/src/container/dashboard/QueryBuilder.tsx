import DeleteIcon from "@/assets/svg/icons/DeleteIcon";
import EventIcon from "@/assets/svg/icons/EventIcon";
import Button from "@/common/Button";
import DraggablePanel from "@/components/draggablePanel/DraggablePanel";
import Searchbar from "@/components/filter/Searchbar";
import Sidebar from "@/components/filter/Sidebar";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Filter from "./Filter";
import { CharacterIcon } from "@/assets/svg";

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
                        {/* Character Icon svg */}
                        <CharacterIcon />
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
                        {/* Character Icon svg */}
                        <CharacterIcon />
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
                        {/* Event Icon svg */}
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
                        {/* Event Icon svg */}
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
                        {/* Event Icon svg */}
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
