import React, { FC } from 'react';
import { QueryBuilder, RuleGroupType, Classnames } from 'react-querybuilder';
import { Button } from '@/components/ui/button'; 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const fields = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'distinctId', label: 'Distinct ID' },
  { name: 'updatedAt', label: 'Updated At', type: 'date' },
  { name: 'countryCode', label: 'Country Code' },
  { name: 'region', label: 'Region' },
  { name: 'city', label: 'City' },
];

interface QueryBuilderProps {
  onQueryChange: (query: RuleGroupType) => void;
}



const controlClassNames: Partial<Classnames> = {
  queryBuilder: 'border rounded p-4 shadow-md',
  ruleGroup: 'space-x-2 p-2 bg-gray-100 rounded',
  combinators: 'text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-2.5 rounded-lg mr-1',
  addRule: 'text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mr-1',
  addGroup: 'text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg ',
  removeGroup: 'bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg ml-1',
  rule: 'flex space-x-1 space-y-1 items-center gap-1 mt-1',
  fields: 'border p-2 rounded bg-[#eae8fb]',
  operators: 'border p-2 rounded bg-[#eae8fb]',
  value: 'border p-2 rounded bg-[#eae8fb]',
  removeRule: 'bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg',
};

const ReactQueryBuilder: React.FC<QueryBuilderProps> = ({ onQueryChange }) => {
  return (
    <QueryBuilder
      fields={fields}
      onQueryChange={onQueryChange}
      controlClassnames={controlClassNames}
      controlElements={{
        
        addRuleAction: ({ handleOnClick }) => (
          <Button className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mr-1' onClick={handleOnClick}>
            Add Rule
          </Button>
        ),
        addGroupAction: ({ handleOnClick }) => (
          <Button className='text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg'  onClick={handleOnClick}>
            Add Group
          </Button>
        ),
       
      }}
    />
  );
};

export default ReactQueryBuilder;
