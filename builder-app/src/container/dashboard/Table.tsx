"use client";
import { mockTableData } from "@/api/TableData";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";
import { useState } from "react";

const Table = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Function to fetch or set table data (simulate fetching data)
  const fetchTableData = () => {
    // Simulate fetching data from an API or database
    // Replace with actual data fetching logic
    setTimeout(() => {
      setTableData(mockTableData);
    }, 1000); // Simulate loading delay
  };

  // Call fetchTableData on component mount (simulating initial data load)
  useState(() => {
    fetchTableData();
  });

  // Function to handle select all checkbox
  const handleSelectAll = () => {
    const updatedData = tableData.map((row) => ({
      ...row,
      selected: !selectAll,
    }));
    setTableData(updatedData);
    setSelectAll(!selectAll);
  };

  // Function to handle individual row checkbox
  const handleRowCheckboxChange = (rowId: number) => {
    const updatedData = tableData.map((row) =>
      row.id === rowId ? { ...row, selected: !row.selected } : row
    );
    setTableData(updatedData);
    setSelectAll(updatedData.every((row) => row.selected));
  };

  return (
    <div className="w-full mt-6">
      {/* Table */}
      {tableData.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200 mt-4 rounded-lg overflow-hidden">
          <TableHeader
            selectAll={selectAll}
            handleSelectAll={handleSelectAll}
          />
          <TableBody
            tableData={tableData}
            handleRowCheckboxChange={handleRowCheckboxChange}
          />
        </table>
      )}
    </div>
  );
};

export default Table;
