import React from "react";

export const TableRow = ({ tradeDetails }) => {
  return (
    <tr>
      <td></td>
      <td>{tradeDetails[1]}</td>
      <td>{tradeDetails[2]}</td>
      <td>{tradeDetails[3]}</td>
      <td>{tradeDetails[4]}</td>
      <td>{tradeDetails[5]}</td>
    </tr>
  );
};
