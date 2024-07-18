import { mockTableData } from "@/api/index";
import TableBody from "@/components/table/TableBody";
import TableHeader from "@/components/table/TableHeader";
import { useState, useEffect } from "react";
import { RuleGroupType, formatQuery, RuleType } from "react-querybuilder";
import ReactQueryBuilder from "@/components/reactQueryBuilder/reactQueryBuilder";
import { options } from "@/utils/optionsQueryBuilder";

const Table = () => {
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [query, setQuery] = useState<RuleGroupType>({
    combinator: "and",
    rules: [
      {
        field: "name",
        operator: "beginsWith",
        value: "",
      },
      {
        field: "email",
        operator: "contains",
        value: "",
      },
    ],
  });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Function to check if an item matches the query rules
  const matchesQuery = (
    item: any,
    query: RuleType<string, string, any, string> | RuleGroupType
  ): boolean => {
    if ("field" in query) {
      // Check if it's a RuleType
      switch (query.operator) {
        case "beginsWith":
          return item[query.field].startsWith(query.value);
        case "contains":
          return item[query.field].includes(query.value);
        case "equals":
          return item[query.field] === query.value;
        default:
          return true;
      }
    } else {
      if (query.combinator === "and") {
        return query.rules.every((rule) => matchesQuery(item, rule));
      } else {
        return query.rules.some((rule) => matchesQuery(item, rule));
      }
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

      let newFilteredData = tableData.filter((item) =>
        matchesQuery(item, query)
      );
      setFilteredData(newFilteredData);

      if (selectedOptions.includes("Disabled")) {
        newFilteredData = newFilteredData.filter(
          (item) => item.status === "Disabled"
        );
      }

      setFilteredData(newFilteredData);
    };

    filterData();
  }, [query, tableData, selectedOptions]);

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

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="w-full mt-6">
      {/* <div>
        <h2>Options:</h2>
        {options.map((option) => (
          <div key={option} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="mr-2"
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div> */}
      <ReactQueryBuilder
        query={query}
        onQueryChange={setQuery}
      />
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
