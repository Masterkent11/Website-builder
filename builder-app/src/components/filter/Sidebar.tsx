import React, { useState } from "react";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-full p-4 text-xs">
        <div
          className={`cursor-pointer ${
            selectedCategory === "All" ? "font-bold" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </div>
        <div
          className={`cursor-pointer mt-2 ${
            selectedCategory === "User" ? "font-bold" : ""
          }`}
          onClick={() => setSelectedCategory("User")}
        >
          User
        </div>
        <div
          className={`cursor-pointer mt-2 ${
            selectedCategory === "Users who" ? "font-bold" : ""
          }`}
          onClick={() => setSelectedCategory("Users who")}
        >
          Users who
        </div>
        <div
          className={`cursor-pointer mt-2 ${
            selectedCategory === "Cohorts" ? "font-bold" : ""
          }`}
          onClick={() => setSelectedCategory("Cohorts")}
        >
          Cohorts
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
