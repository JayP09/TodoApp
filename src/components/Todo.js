import React,{useState} from "react"
import { FaCheck, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';
import Icon from "./Icon";

const Todo = ({updateTodo, removeTodo, todo, markAsCompleted}) => {
    const [input, setInput] = useState(() => {
        return todo.task
    })

    const [editMode, setEditMode] = useState(true)
    
    const editTodo = () => {
        setEditMode((oldValue) => !oldValue)
        console.log(todo)
    }

    return (
        <div key={todo.id} className="flex justify-center m-1 w-full">
            <input 
                className={`p-2 text-base float-left w-full text-black bg-white ${todo.markAsCompleted ? "line-through": ""}`}
                type="text"
                name="todo"
                value={input}
                disabled={editMode}
                onChange={(e) => setInput(e.target.value)}
            />
            <Icon icon={<FaCheck />} color="bg-[#3EC282]" click={() => markAsCompleted(todo.id)}/>
            {
                editMode ? (
                    <Icon icon={<FaEdit />} color="bg-[#563EC1]" click={editTodo}/>
                ) : ( 
                    <Icon icon={<FaUpload />} color="bg-[#563EC1]" click={() => {
                        updateTodo(todo.id, input)
                        setEditMode((oldValue) => !oldValue)
                    }}
                    />
                )
            } 
            <Icon icon={<FaTrash />} color="bg-[#ec2c2c]" click={() => removeTodo(todo.id)}/>
        </div>
    )
}

export default Todo