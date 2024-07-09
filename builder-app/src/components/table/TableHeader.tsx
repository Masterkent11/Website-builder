// components/table/TableHeader.tsx
import React from "react";

interface TableHeaderProps {
  selectAll: boolean;
  handleSelectAll: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  selectAll,
  handleSelectAll,
}) => {
  return (
    <thead className="bg-gray-300">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            checked={selectAll}
            onChange={handleSelectAll}
          />
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Distinct ID
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Updated at
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Country Code
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Region
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          City
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
