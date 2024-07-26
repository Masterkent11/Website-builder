import React, { FC } from "react";
import { QueryBuilder, RuleGroupType } from "react-querybuilder";
import { Button } from "@/components/ui/button";
import { controlClassNames } from "@/style/QuerybuilderStyle";
import { QueryBuilderProps } from "@/types/components/QueryBuilderTypes";
import { fields } from "@/api/index";
import { CombinatorSelectorProps } from "react-querybuilder";

// Define the custom combinator selector component
const CustomCombinatorSelector: React.FC<CombinatorSelectorProps> = ({
  handleOnChange,
  options,
  value,
  title,
}) => {
  return (
    <select
      className="text-sm bg-green-500 text-white border border-gray-300  px-3.5 py-2.5 rounded-lg mr-1"
      onChange={(e) => handleOnChange(e.target.value)}
      value={value}
      title={title}
    >
      {options.map((option) => (
        <option
          key={option.label}
          value={option.label}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};
const ReactQueryBuilder: React.FC<QueryBuilderProps> = ({
  query,
  onQueryChange,
}) => {
  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={onQueryChange}
      controlClassnames={controlClassNames}
      controlElements={{
        addRuleAction: ({ handleOnClick }) => (
          <Button
            className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mr-1"
            onClick={handleOnClick}
          >
            + Add Rule
          </Button>
        ),
        addGroupAction: ({ handleOnClick }) => (
          <Button
            className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
            onClick={handleOnClick}
          >
            + Add Group
          </Button>
        ),
        combinatorSelector: CustomCombinatorSelector,
      }}
    />
  );
};

export default ReactQueryBuilder;
