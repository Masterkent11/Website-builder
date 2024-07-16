import React, { FC } from 'react'
import {QueryBuilder, RuleGroupType  } from "react-querybuilder"

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
  

const ReactQueryBuilder: React.FC<QueryBuilderProps>= ({onQueryChange}) => {
  return (
    <QueryBuilder
    fields={fields}
    onQueryChange={onQueryChange}/>
  )
}

export default ReactQueryBuilder