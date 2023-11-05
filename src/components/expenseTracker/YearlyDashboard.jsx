import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import { FaArrowRight } from "react-icons/fa";

function YearlyDashboard() {
  const { year, updateYear, yearIncome, yearExpense } = useContext(DataContext);

  return (
    <div className="yearly">
      <div className="yearly-header">
        <p>Yearly</p>
        <p>{year}</p>
        <form onSubmit={updateYear}>
          <input type="number" id="year" min="1990" max="2050" />
          <button type="submit">
            <FaArrowRight />
          </button>
        </form>
      </div>
      <div className="income-and-expense">
        <div className="income">
          <p>Income</p>
          <p>{yearIncome}</p>
        </div>
        <div className="expense">
          <p>Expense</p>
          <p>{yearExpense}</p>
        </div>
      </div>
    </div>
  );
}

export default YearlyDashboard;
