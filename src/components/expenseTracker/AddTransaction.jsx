import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import DataContext from "../../contexts/DataContext";

function AddTransaction() {
  const { addTransaction, amount, user, description, type } =
    useContext(DataContext);

  return (
    <div className="add-transaction">
      <h2 style={{ textAlign: "center" }}>Add Transaction</h2>
      <form onSubmit={addTransaction}>
        <table className="add-transaction-table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="user">User</label>
              </td>
              <td>
                <input type="text" id="user"></input>
              </td>
              <td>
                <label htmlFor="amount">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Amount
                </label>
              </td>
              <td>
                <input type="number" id="amount" min="1"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="type">Type</label>
              </td>
              <td>
                <select name="type" id="type">
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </td>
              <td>
                <label htmlFor="date">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Date
                </label>
              </td>
              <td>
                <input type="date" id="date"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="description">Description</label>
              </td>
              <td>
                <input type="text" id="description"></input>
              </td>
              <td>
                <button type="submit">
                  <FaPlus />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddTransaction;
