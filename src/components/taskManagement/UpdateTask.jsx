import React from 'react'

function UpdateTask({updateTask}) {
  return (

    <div id = 'UpdateTask'>
      <div className="newTaskContainer">
        <h2>Update Task</h2>
        <form id="UpdateTaskForm"  className="form" onSubmit={updateTask}>
        <div className="form-group">
            <label htmlFor='taskId'>Task Id*</label>
            <input id="taskId" type='text' placeholder='Enter Task Id' required></input>
            </div>
            <div className="form-group">
            <label htmlFor='assignee'>Assignee*</label>
            <input id="assignee" type='text' placeholder='Enter Assignee' required></input>
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
            <button type='submit'>Update Task</button>
             
            </form>
            </div>    
            </div>
  )
}

export default UpdateTask