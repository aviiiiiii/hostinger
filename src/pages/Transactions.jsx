import React from "react";
import TransactionList from "../components/expenseTracker/TransactionList";
import TransactionsFilter from "../components/expenseTracker/TransactionsFilter";

function Transactions() {
  return (
    <div className="transactions">
      <TransactionsFilter />
      <TransactionList />
    </div>
  );
}

export default Transactions;
