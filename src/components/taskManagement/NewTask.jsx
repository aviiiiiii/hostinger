import React from 'react'

function NewTask({addNewTask}) {
  return (

    <div id = 'newTask'>
        <h2 className='form-header'>New Task</h2>
        <form id="newTaskForm" onSubmit={addNewTask}>
            <label htmlFor='taskId'>Task Id*</label>
            <input id="taskId" type='text' placeholder='Enter Task Id' required></input><br/>
            <label htmlFor='taskName'>Task Name*</label>
            <input id='taskName'type='text' placeholder='Enter Task Name' required></input><br/>
            <label htmlFor='taskAssignee'>Assignee*</label>
            <input id='taskAssignee'type='text' placeholder='Enter Assignee' required></input><br/>
            <label htmlFor='taskStatus'>Status*</label>
            <select id='taskStatus' name='taskStatus' required>
                 <option value="" disabled selected>Select Status</option>
                <option value='ToDo'>ToDo</option>
                <option value='InProgress'>InProgress</option>
                <option value='Completed'>Completed</option>
                <option value='Blocked'>Blocked</option>
            </select><br />
            <button type='submit'>Add Task</button>
             
            </form>
            </div>    
  )
}

export default NewTask