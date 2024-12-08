import React from 'react'

function NewTask({addNewTask}) {
  return (

    <div id = 'newTask'>
      <div className="newTaskContainer">
      <h2>New Task</h2>
      <form id="newTaskFrom" className="form" onSubmit={addNewTask}>
      <div className="form-group">
      <label htmlFor='taskId'>Task Id*</label>
            <input id="taskId" type='text' placeholder='Enter Task Id' required></input>
            </div>
            <div className="form-group">
            <label htmlFor='taskName'>Task Name*</label>
            <input id='taskName'type='text' placeholder='Enter Task Name' required></input>
            </div>
            <div className="form-group">
            <label htmlFor='taskAssignee'>Assignee*</label>
            <input id='taskAssignee'type='text' placeholder='Enter Assignee' required></input>
            </div>
            <div className="form-group">
            <label htmlFor='taskStatus'>Status*</label>
            <select id='taskStatus' name='taskStatus' required>
                 <option value="" disabled selected>Select Status</option>
                <option value='ToDo'>ToDo</option>
                <option value='InProgress'>InProgress</option>
                <option value='Completed'>Completed</option>
                <option value='Blocked'>Blocked</option>
            </select></div>
            <button type='submit'>Add Task</button>
      </form>
    </div>
            </div>    
  )
}

export default NewTask