import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import React, { useState,useEffect } from 'react'


function App() {
 
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setstatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  
  useEffect(() => {
    getLocalTodos();
  },[]);


  useEffect(() => {
    filterHandler();
    saveLocalTodos()
},[todos, status])


  const filterHandler = () => {
    switch(status){
      case'complated':
        setfilteredTodos(todos.filter(todo => todo.complated === true))

        break;
      case 'uncomplated':
        setfilteredTodos(todos.filter(todo => todo.complated === false))
        break;
      default: 
        setfilteredTodos(todos);
        break;  
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify([]))
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)

    }
  }

  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setstatus= {setstatus}
        filteredTodos= {filteredTodos}
      />
      {/* <Todo todos={todos} setTodos={setTodos}/> */}
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/> 
    </div>
  )
}

export default App
