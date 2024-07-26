import { RuleGroupType } from "react-querybuilder";
export interface QueryBuilderProps {
  query: RuleGroupType;
  onQueryChange: (query: RuleGroupType) => void;
}
