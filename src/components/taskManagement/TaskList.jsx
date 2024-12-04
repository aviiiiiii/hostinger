import React, { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useContext(DataContext);

  return (
    <div className="transaction-container">
      <table className="transaction-list-table">
        <thead>
          <tr>
            <td>TaskId</td>
            <td>TaskName</td>
            <td>Assignee</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <TaskItem key={item._id} Item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
