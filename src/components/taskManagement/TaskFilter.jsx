import React from 'react'

function TaskFilter({filterTasks, getTasks}) {
  return (

    <div id = 'taskFilter'>
      <div className="newTaskContainer">
        <h2>All Tasks</h2>
        <form id="taskFilterForm" onSubmit={filterTasks}>
        <div className="form-group">
            <label htmlFor='taskId'>Task Id</label>
            <input id="taskId" type='text' placeholder='Enter Task Id' ></input>
            </div>
            <div className="form-group">
            <label htmlFor='taskName'>Task Name</label>
            <input id='taskName'type='text' placeholder='Enter Task Name' ></input>
            </div>
            <div className="form-group">
            <label htmlFor='taskAssignee'>Assignee</label>
            <input id='taskAssignee'type='text' placeholder='Enter Assignee'></input>
            </div>
            <div className="form-group">
            <label htmlFor='taskStatus'>Status</label>
            <select id='taskStatus' name='taskStatus'>
                 <option value="" disabled selected>Select Status</option>
                <option value='ToDo'>ToDo</option>
                <option value='InProgress'>InProgress</option>
                <option value='Completed'>Completed</option>
                <option value='Blocked'>Blocked</option>
            </select></div>
            <div className='buttonGroup'>
            <button id='filter' name ='filter' type='submit'>Filter Task</button>
            <button id='resetFields' name ='resetFields' type='submit'>Reset</button>
            {/* <button id="getTasks" onClick={getTasks}>getTasks</button>       */}
            </div>
            </form>
            <hr></hr>
            </div>    
            </div>
  )
}

export default TaskFilter