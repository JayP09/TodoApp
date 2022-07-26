import React,{useState, useEffect} from "react"
import Todos from "./components/Todos"
import TodoForm from "./components/TodoForm"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = async todo => {
    setTodos([todo,...todos])
  }

  const removeAllTodos = () => {
    if(localStorage.getItem("todos")) {
      localStorage.clear()
      document.location.reload()
      alert("All Todos removed")
    } else{
      alert('There is no todo in localStorage')
    }
  }

  const markAsCompleted = (id) => {
    let updatedTodo = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, markAsCompleted: !todo.markAsCompleted}
      }
      return todo
    })
    setTodos(updatedTodo)
  }

  const removeTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, task) => {
    let updatedTodo = todos.map((todo) => {
      if(todo.id === id) {
        return {...todo, task: task}
      }
      return todo
    })
    setTodos(updatedTodo)
    alert("Todo updated")
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-br from-[#ec2c2c] to-[#e9993d] text-white overflow-auto">
      <h1 className="text-4xl mx-6 mt-6 uppercase font-bold">Add Todo List</h1>
      <div className="border-t-4 border-white w-8 mb-5 mt-2"></div>
      <div className="flex flex-col w-full items-center h-full">
        <TodoForm addTodo={addTodo} removeAllTodos={removeAllTodos}/>
        <Todos todos={todos} markAsCompleted={markAsCompleted} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </div>
    </div>
  );
}

export default App;
