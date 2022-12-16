import React from "react";
import { ExpendableButton } from "./ExpendableButton";
import { TableRow } from "./TableRow";
import { TableHeader } from "./TableHeader";
import useOpenController from "../Hooks/useOpenController";

export const TableSection = ({ tradeDetails,index}) => {
  const { isOpen, toggle } = useOpenController(false);
  console.log(tradeDetails);
  return (
    <tbody>
      <tr>
        <td className="button-td">
          <ExpendableButton isOpen={isOpen} toggle={toggle} />
        </td>
        <td>
         
          <b><TableHeader time={tradeDetails[0]}/></b>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {isOpen && <TableRow tradeDetails={tradeDetails} />}
    </tbody>
  );
};
