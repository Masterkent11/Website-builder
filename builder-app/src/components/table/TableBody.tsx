// components/table/TableBody.tsx
import React from "react";

interface TableBodyProps {
  tableData: any[];
  handleRowCheckboxChange: (rowId: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({
  tableData,
  handleRowCheckboxChange,
}) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {tableData.map((row) => (
        <tr key={row.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              checked={row.selected || false}
              onChange={() => handleRowCheckboxChange(row.id)}
            />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.distinctId}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.updatedAt}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.countryCode}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.region}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.city}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
