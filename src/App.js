// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponenets/Header"
import Todos from "./MyComponenets/Todos"
import Footer from "./MyComponenets/Footer"
import AddTodo from './MyComponenets/AddTodo';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  

  const addTodo=(title,desc)=>{
    console.log("Adding Todo",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno + 1;
    }
   
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    if(title&&desc)
    {
      setTodos([...todos,myTodo]);
    console.log(myTodo);

    }
    
  }
  const[todos,setTodos]=useState([
    {
      sno:1 ,
      title: "Go to market",
      desc:"You need to go to market and buy tomatos"
    },
    {
      sno:2,
      title: "Go to Gym",
      desc:"You need to work on upper body"
    },
    {
      sno:3,
      title: "Study",
      desc:"You need to study physcis chapter-4"
    }
    
  ]);
  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
