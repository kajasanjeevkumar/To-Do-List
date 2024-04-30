import React from 'react'
import TodoItem from "./TodoItem"
const todos = (props) => {
  let myStyle={
      minheight:"90vh",
      margin:"10px auto"
  }
  return (
    
    <div className="container" style={myStyle} my-3>
      <hr />
     <h3 className="my-3"><u>Todos List</u></h3>
     {props.todos.length==0?"No Todos to Display":
     props.todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
     })}
    
    </div>
  )
}

export default todos
