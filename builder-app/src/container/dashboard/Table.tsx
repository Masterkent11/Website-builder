
import { mockTableData } from "@/api/TableData";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";
import { useState, useEffect } from "react";
import { RuleGroupType, formatQuery, RuleType } from 'react-querybuilder';
import ReactQueryBuilder from "@/components/reactQueryBuilder/reactQueryBuilder";


const Table = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [query, setQuery] = useState<RuleGroupType>({ combinator: 'and', rules: [] });

  // Function to check if an item matches the query rules
  const matchesQuery = (item: any, query: RuleType<string, string, any, string> | RuleGroupType): boolean => {
    if ('field' in query) {
       // Check if it's a RuleType
      switch (query.operator) {
        case 'beginsWith':
          return item[query.field].startsWith(query.value);
        case 'contains':
          return item[query.field].includes(query.value);
        case 'equals':
          return item[query.field] === query.value;
        default:
          return true;
      }
    } else {
      return query.rules.every(rule => matchesQuery(item, rule));
    }
  };

  // Function to fetch or set table data (simulate fetching data)
  const fetchTableData = () => {
    setTimeout(() => {
      setTableData(mockTableData);
    }, 1000); // Simulate loading delay
  };

  // Call fetchTableData on component mount (simulating initial data load)
  useEffect(() => {
    fetchTableData();
  }, []);

  // Effect to filter tableData based on query
  useEffect(() => {
    const filterData = () => {
      if (query.rules.length === 0) {
        setFilteredData(tableData);
        return;
      }

      const newFilteredData = tableData.filter(item => matchesQuery(item, query));
      setFilteredData(newFilteredData);
    };

    filterData();
  }, [query, tableData]);

  // Function to handle select all checkbox
  const handleSelectAll = () => {
    const updatedData = filteredData.map((row) => ({
      ...row,
      selected: !selectAll,
    }));
    setFilteredData(updatedData);
    setSelectAll(!selectAll);
  };

  // Function to handle individual row checkbox
  const handleRowCheckboxChange = (rowId: number) => {
    const updatedData = tableData.map((row: { id: number; selected: any }) =>
      row.id === rowId ? { ...row, selected: !row.selected } : row
    );
    setTableData(updatedData);
    setSelectAll(updatedData.every((row: { selected: any }) => row.selected));
  };

  return (
    <div className="w-full mt-6">
      <ReactQueryBuilder onQueryChange={setQuery} />
      {/* Table */}
      {filteredData.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200 mt-4 rounded-lg overflow-hidden">
          <TableHeader
            selectAll={selectAll}
            handleSelectAll={handleSelectAll}
          />
          <TableBody
            tableData={filteredData}
            handleRowCheckboxChange={handleRowCheckboxChange}
          />
        </table>
      )}
    </div>
  );
};

export default Table;
