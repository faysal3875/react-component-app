import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = ({ data, onSort, sortedColumn, columns }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={onSort}
        sortedColumn={sortedColumn}
      />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
