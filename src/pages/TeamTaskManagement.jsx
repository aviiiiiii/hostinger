import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react"
import DataContext from "../contexts/DataContext"
import NewTask from "../components/taskManagement/NewTask"
import UpdateTask from '../components/taskManagement/UpdateTask';
import TaskFilter from '../components/taskManagement/TaskFilter';
import TaskList from '../components/taskManagement/TaskList';

function TeamTaskManagement() {

  const {addNewTask, updateTask, filterTasks, getTasks} = useContext(DataContext);

  return (
    <div>
      <h1 className='taskManagementTitle'>Task Management System</h1>
      <div className='taskContainer'>
      <div class="left-column"> 
        <div class="box half-height">
          <NewTask addNewTask={addNewTask}/>
        </div> 
        <div class="box half-height">
          <UpdateTask updateTask={updateTask}/>
        </div>
      </div> 
      <div class="right-column"> 
        <div class="box full-height">
          <TaskFilter filterTasks={filterTasks} getTasks={getTasks}/>
          <TaskList />
        </div>
      </div>
    </div>
    </div>



  );
}

export default TeamTaskManagement;
