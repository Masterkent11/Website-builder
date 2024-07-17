import React, { FC } from 'react';
import { QueryBuilder, RuleGroupType } from 'react-querybuilder';
import { Button } from '@/components/ui/button'; 
import {controlClassNames} from "@/style/QuerybuilderStyle"
import { QueryBuilderProps } from '@/types/components/QueryBuilderTypes';
import {fields} from "@/api/index"




const ReactQueryBuilder: React.FC<QueryBuilderProps> = ({ query, onQueryChange }) => {
  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={onQueryChange}
      controlClassnames={controlClassNames}
      controlElements={{
        addRuleAction: ({ handleOnClick }) => (
          <Button className='text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mr-1' onClick={handleOnClick}>
            + Add Rule
          </Button>
        ),
        addGroupAction: ({ handleOnClick }) => (
          <Button className='text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg'  onClick={handleOnClick}>
            + Add Group
          </Button>
        ),
      }}
    />
  );
};

export default ReactQueryBuilder;
