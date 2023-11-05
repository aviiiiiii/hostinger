import React, { useContext } from "react";
import { FaFilter, FaRegTrashAlt } from "react-icons/fa";
import DataContext from "../../contexts/DataContext";

function TransactionsFilter() {
  const { filterSubmit } = useContext(DataContext);
  return (
    <div className="transactions-filter">
      <h2 style={{ textAlign: "center" }}>Transaction Filter</h2>
      <form className="filter-form" onSubmit={filterSubmit}>
        <div className="filter-inputs">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="filterUser">User</label>
                </td>
                <td className="filter-input-column">
                  {" "}
                  <input id="filterUser" type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="filterType">Type</label>
                </td>
                <td className="filter-input-column">
                  <select name="filterType" id="filterType">
                    <option value="null"></option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="filterDateStart">Date From</label>
                </td>
                <td className="filter-input-column">
                  <input id="filterDateStart" type="date" />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label htmlFor="filterDateEnd">Date To</label>
                </td>
                <td className="filter-input-column">
                  <input id="filterDateEnd" type="date" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="filter-buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="filterSearch">Search with Filter</label>
                </td>
                <td>
                  <button id="filterSearch" name="filterSearch" type="submit">
                    <FaFilter />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="filterReset">Reset Filter</label>
                </td>
                <td>
                  <button id="filterReset" name="filterReset" type="submit">
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default TransactionsFilter;
