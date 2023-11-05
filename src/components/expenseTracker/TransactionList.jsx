import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useContext(DataContext);

  return (
    <div className="transaction-container">
      <table className="transaction-list-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Type</td>
            <td>Description</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <TransactionItem key={item._id} Item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
