// import Button from "@/common/Button";
// import Input from "@/common/Input";
// import React from "react";

// const Searchbar = () => {
//   return (
//     <div className="flex items-center justify-between p-4">
//       {/* SearchBar */}
//       <div className="relative">
//         <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-5 text-gray-400"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </div>
//         <Input
//           placeholder="Search..."
//           type="text"
//           className="block w-[70vmin] pl-10 pr-3 py-2 rounded-md bg-gray-100 focus:outline-none"
//           name=""
//         />
//       </div>
//       {/* Button */}
//       <div className="flex">
//         <Button
//           className="w-24 bg-transparent flex gap-2 items-center justify-center rounded"
//           data-testid={"Create-filter"}
//         >
//           <span className="font-medium text-xl t text-[#4f44e0]">+</span>
//           <span className="text-sm t text-[#4f44e0]"> Create</span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

// src/components/filter/Searchbar.tsx
import React, { useState } from "react";
import Button from "@/common/Button";
import Input from "@/common/Input";

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex items-center justify-between p-4">
      {/* SearchBar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <Input
          placeholder="Search..."
          type="text"
          className={`block w-[70vmin] pl-10 pr-3 py-2 rounded-md bg-gray-100 focus:outline-1 focus:outline-[#4f44e0] ${
            isFocused ? "border-[#4f44e0] bg-white " : " "
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={""}
        />
      </div>
      {/* Button */}
      <div className="flex">
        <Button
          className="w-24 bg-transparent flex gap-2 items-center justify-center rounded"
          data-testid={""}
        >
          <span className="font-medium text-xl text-[#4f44e0]">+</span>
          <span className="text-sm text-[#4f44e0]"> Create</span>
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
