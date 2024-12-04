import React from 'react'

function UpdateTask({updateTask}) {
  return (

    <div id = 'UpdateTask'>
        <h2 className='form-header'>New Task</h2>
        <form id="UpdateTaskForm" onSubmit={updateTask}>
            <label htmlFor='taskId'>Task Id*</label>
            <input id="taskId" type='text' placeholder='Enter Task Id' required></input><br/>
            <label htmlFor='taskStatus'>Status*</label>
            <select id='taskStatus' name='taskStatus' required>
                 <option value="" disabled selected>Select Status</option>
                <option value='ToDo'>ToDo</option>
                <option value='InProgress'>InProgress</option>
                <option value='Completed'>Completed</option>
                <option value='Blocked'>Blocked</option>
            </select><br />
            <button type='submit'>Update Task</button>
             
            </form>
            </div>    
  )
}

export default UpdateTask