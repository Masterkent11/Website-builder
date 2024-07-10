"use client";

import Filter from "@/container/dashboard/Filter";
import QueryBuilder from "@/container/dashboard/QueryBuilder";
import Table from "@/container/dashboard/Table";

// import { mockTableData } from "@/api/TableData";
// import CalendarIcon from "@/assets/svg/CalendarIcon";
// import DeleteIcon from "@/assets/svg/DeleteIcon";
// import EventIcon from "@/assets/svg/EventIcon";
// import Button from "@/common/Button";
// import DraggablePanel from "@/components/draggablePanel/DraggablePanel";
// import Searchbar from "@/components/filter/Searchbar";
// import Sidebar from "@/components/filter/Sidebar";
// import TableBody from "@/components/table/TableBody";
// import TableHeader from "@/components/table/TableHeader";
// import React, { useState } from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const QueryBuilder = () => {
//   const [filters, setFilters] = useState<string[]>([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const addFilter = (filter: string) => {
//     setFilters([...filters, filter]);
//   };

//   const removeFilter = (filter: string) => {
//     setFilters(filters.filter((f) => f !== filter));
//   };

//   const clearFilters = () => {
//     setFilters([]);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="p-2 border-gray-300 border rounded-xl">
//         <DraggablePanel />

//         <div className="relative">
//           <div className=" flex flex-wrap gap-2 py-2">
//             {filters.map((filter, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 text-gray-500 px-2  rounded-lg flex items-center text-xs"
//               >
//                 {filter}
//                 <Button
//                   className="ml-2 text-sm text-gray-500"
//                   onClick={() => removeFilter(filter)}
//                   data-testid={""}
//                 >
//                   &times;
//                 </Button>
//               </div>
//             ))}
//             {filters.length > 0 && (
//               //Delete Icon Svg
//               <DeleteIcon onClick={clearFilters} />
//             )}
//           </div>
//           <Button
//             onClick={toggleDropdown}
//             className="px-2 rounded-lg text-md flex justify-center items-center gap-2 font-medium  bg-[#eae8fb]"
//             data-testid={""}
//           >
//             <span className="font-medium text-xl  text-[#4f44e0]">+</span>
//             <span className="text-sm  text-[#4f44e0]"> Filter</span>
//           </Button>
//           {isDropdownOpen && (
//             <div className="absolute mt-2 w-[90vmin] h-auto bg-white shadow-lg rounded-md overflow-hidden z-10 border-gray-600">
//               {/* Searchbar */}
//               <Searchbar />
//               <div className="flex">
//                 {/* Sidebar */}
//                 <Sidebar />
//                 {/* Vertical Divider */}
//                 <div className="w-px h-auto bg-gray-300 my-1 mx-3"></div>
//                 {/* Recent */}
//                 <div className="w-3/4 p-4">
//                   <span className="text-xs">Recent</span>

//                   <Button
//                     onClick={() => {
//                       addFilter("First Seen");
//                       toggleDropdown();
//                     }}
//                     className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-sm rounded-sm"
//                     data-testid={""}
//                   >
//                     {/* Calendar Icon svg */}
//                     <EventIcon />
//                     <span className="text-black text-sm"> First Seen</span>
//                   </Button>
//                   {/* Horizontal Divider */}
//                   <div className="border-t border-gray-300 my-1 "></div>
//                   <span className="text-xs">All properties</span>
//                   <div>
//                     <Button
//                       onClick={() => {
//                         addFilter("First Seen");
//                         toggleDropdown();
//                       }}
//                       className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-sm rounded-sm"
//                       data-testid={""}
//                     >
//                       {/* Calendar Icon svg */}
//                       <EventIcon />
//                       <span className="text-black text-sm"> First Seen</span>
//                     </Button>
//                     <Button
//                       onClick={() => {
//                         addFilter("First Seen");
//                         toggleDropdown();
//                       }}
//                       className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-sm rounded-sm"
//                       data-testid={""}
//                     >
//                       {/* Calendar Icon svg */}
//                       <EventIcon />
//                       <span className="text-black text-sm"> Event</span>
//                     </Button>
//                     <Button
//                       onClick={() => {
//                         addFilter("First Seen");
//                         toggleDropdown();
//                       }}
//                       className="w-full flex justify-start items-center gap-2 p-2 bg-transparent text-sm rounded-sm"
//                       data-testid={""}
//                     >
//                       {/* Calendar Icon svg */}
//                       <EventIcon />
//                       <span className="text-black text-sm"> Event</span>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const Table = () => {
//   const [tableData, setTableData] = useState<any[]>([]);
//   const [selectAll, setSelectAll] = useState(false);

//   // Function to fetch or set table data (simulate fetching data)
//   const fetchTableData = () => {
//     // Simulate fetching data from an API or database
//     // Replace with actual data fetching logic
//     setTimeout(() => {
//       setTableData(mockTableData);
//     }, 1000); // Simulate loading delay
//   };

//   // Call fetchTableData on component mount (simulating initial data load)
//   useState(() => {
//     fetchTableData();
//   });

//   // Function to handle select all checkbox
//   const handleSelectAll = () => {
//     const updatedData = tableData.map((row) => ({
//       ...row,
//       selected: !selectAll,
//     }));
//     setTableData(updatedData);
//     setSelectAll(!selectAll);
//   };

//   // Function to handle individual row checkbox
//   const handleRowCheckboxChange = (rowId: number) => {
//     const updatedData = tableData.map((row) =>
//       row.id === rowId ? { ...row, selected: !row.selected } : row
//     );
//     setTableData(updatedData);
//     setSelectAll(updatedData.every((row) => row.selected));
//   };

//   return (
//     <div className="w-full mt-6">
//       {/* Table */}
//       {tableData.length > 0 && (
//         <table className="min-w-full divide-y divide-gray-200 mt-4 rounded-lg overflow-hidden">
//           <TableHeader
//             selectAll={selectAll}
//             handleSelectAll={handleSelectAll}
//           />
//           <TableBody
//             tableData={tableData}
//             handleRowCheckboxChange={handleRowCheckboxChange}
//           />
//         </table>
//       )}
//     </div>
//   );
// };

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6  ">
      <div>
        <Filter />
      </div>
      <QueryBuilder />
      <Table />
    </div>
  );
};

export default Dashboard;
