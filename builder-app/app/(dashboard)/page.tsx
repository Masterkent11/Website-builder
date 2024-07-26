"use client";

import QueryBuilder from "../../container/dashboard/QueryBuilder";
import Table from "../../container/dashboard/Table";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6  ">
      <QueryBuilder />
      <Table />
    </div>
  );
};

export default Dashboard;
