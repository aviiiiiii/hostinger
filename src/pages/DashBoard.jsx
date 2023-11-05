import React from "react";
import AddTransaction from "../components/expenseTracker/AddTransaction";
import MonthlyDashboard from "../components/expenseTracker/MonthlyDashboard";
import YearlyDashboard from "../components/expenseTracker/YearlyDashboard";

function DashBoard() {
  return (
    <div className="dashboard">
      <YearlyDashboard />
      <MonthlyDashboard />
      <AddTransaction />
    </div>
  );
}

export default DashBoard;
