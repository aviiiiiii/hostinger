import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import DataContext from "../../contexts/DataContext";

function TransactionItem({ Item }) {
  const { deleteOneTransaction } = useContext(DataContext);

  return (
    <tr>
      <td>{Item.user}</td>
      <td>{Item.amount}</td>
      <td>{Item.date.slice(0, 10)}</td>
      <td>{Item.type}</td>
      <td className="desc">{Item.description}</td>
      <td>
        <form onSubmit={deleteOneTransaction}>
          <button name={Item._id} type="submit">
            <FaTrash />
          </button>
        </form>
      </td>
    </tr>
  );
}

export default TransactionItem;
