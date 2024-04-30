import React from 'react'

const todoitem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Completed</button>
      <hr />
    </div>
  )
}

export default todoitem
