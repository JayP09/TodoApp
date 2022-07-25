import React,{useState, useRef} from "react"
import { FaPlus,FaTrash } from 'react-icons/fa';
import {v4} from "uuid";

const TodoForm = ({addTodo, removeAllTodos}) => {
    const [currentInput, setCurrentInput] = useState(() => {
        return ""
    })

    const input = useRef(null)

    const handleSubmit = () => {
        if(currentInput === "") {
            alert("Please Enter some value")
        }
        let todo = {
            task: currentInput,
            id: v4(),
            markAsCompleted: false
        }
        addTodo(todo)
        input.current.value = ""
        setCurrentInput("")
    }

    return (
        <div className="flex justify-center items-center w-[75%] lg:w-[60%] xl:w-[50%]">
          <input 
            ref={input}
            className="p-2 text-base float-left w-full text-black" 
            type="text" 
            placeholder="Add Task..."
            name="todo"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)} 
          />
          <div 
            className="flex items-center justify-center py-2 px-3 text-base bg-[#e9993d] h-full cursor-pointer"
            onClick={handleSubmit}
          >
            <FaPlus />
          </div>
          <div 
            className="flex items-center justify-center py-2 px-3 text-base bg-[#ec2c2c] h-full cursor-pointer" 
            onClick={removeAllTodos}
          >
            <FaTrash />
          </div>
        </div>
    )
}

export default TodoForm