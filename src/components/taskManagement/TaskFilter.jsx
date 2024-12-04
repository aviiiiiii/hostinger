import React from 'react'

function TaskFilter({filterTasks}) {
  return (

    <div id = 'taskFilter'>
        <h2 className='form-header'>All Tasks</h2>
        <form id="taskFilterForm" onSubmit={filterTasks}>
            <label htmlFor='taskId'>Task Id*</label>
            <input id="taskId" type='text' placeholder='Enter Task Id' ></input><br/>
            <label htmlFor='taskName'>Task Name*</label>
            <input id='taskName'type='text' placeholder='Enter Task Name' ></input><br/>
            <label htmlFor='taskAssignee'>Assignee*</label>
            <input id='taskAssignee'type='text' placeholder='Enter Assignee'></input><br/>
            <label htmlFor='taskStatus'>Status*</label>
            <select id='taskStatus' name='taskStatus'>
                 <option value="" disabled selected>Select Status</option>
                <option value='ToDo'>ToDo</option>
                <option value='InProgress'>InProgress</option>
                <option value='Completed'>Completed</option>
                <option value='Blocked'>Blocked</option>
            </select><br />
            <button id='filter' name ='filter' type='submit'>Filter Task</button>
            <button id='reset' name ='reset' type='submit'>Reset</button>             
            </form>
            <hr></hr>
            </div>    
  )
}

export default TaskFilter