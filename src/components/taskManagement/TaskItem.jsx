import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import DataContext from "../../contexts/DataContext";

function TaskItem({ Item }) {
  const { deleteTask } = useContext(DataContext);

  return (
    <tr>
      <td>{Item.taskId}</td>
      <td>{Item.taskName}</td>
      <td>{Item.assignee}</td>
      <td>{Item.taskStatus}</td>
      <td>
        <form onSubmit={deleteTask}>
          <button name={Item.taskId} type="submit">
            <FaTrash />
          </button>
        </form>
      </td>
    </tr>
  );
}

export default TaskItem;
