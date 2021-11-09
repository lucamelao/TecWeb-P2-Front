import { useTable, BootstrapTable } from "react-table";
import { useMemo } from 'react';
import React from 'react'
import { useEffect } from "react";
import axios from "axios";

const RTTable = () => {
    const [bets,setBets] = React.useState([])
    useEffect(() => {
        axios
          .get("http://127.0.0.1:8000/calculate_scores/10")
          .then(() => {
              axios
              .get("http://127.0.0.1:8000/get_all")
              .then((res) => setBets(res.data.bets))
          });
    },[])
    const columns =(
      () => [
      {
        Header: 'User',
        accessor: bet.user
      },
      {
        Header: 'Score',
        accessor: bet.total_score
      }
    ]);

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;
  
  <div>{bets.map((bet => {
    return (    
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  background: '#657',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{padding: '10px', border: 'solid 0.6px gray', background: '#fff'}}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}))}</div>
};
export default RTTable;