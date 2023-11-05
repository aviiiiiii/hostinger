import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import { FaArrowRight } from "react-icons/fa";

function MonthlyDashboard() {
  const { month, updateMonth, monthIncome, monthExpense } =
    useContext(DataContext);

  return (
    <div className="month">
      <div className="monthly-header">
        <p>Monthly</p>
        <p>{month}</p>
        <form onSubmit={updateMonth}>
          <input type="month" id="month" />
          <button type="submit">
            <FaArrowRight />
          </button>
        </form>
      </div>
      <div className="income-and-expense">
        <div className="income">
          <p>Income</p>
          <p>{monthIncome}</p>
        </div>
        <div className="expense">
          <p>Expense</p>
          <p>{monthExpense}</p>
        </div>
      </div>
    </div>
  );
}

export default MonthlyDashboard;
