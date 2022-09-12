import React from 'react'

export default function Input() {
  return (
    <div>
      <h2>ToDo List</h2>
      <input type="text" />
      <button>Add Task</button>
      <button>Delete Tasks</button>
      <div>0 left to do</div>
    </div>
  )
}
