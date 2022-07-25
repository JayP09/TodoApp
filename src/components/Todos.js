import React from "react"
import { FaCheck, FaEdit, FaTrash, FaUpload } from 'react-icons/fa';
import Icon from "./Icon";

const Todos = ({todos, markAsCompleted, removeTodo, editTodo, updateTodo}) => {
    return (
        <div className="mt-12 flex flex-col justify-center items-center w-[75%] lg:w-[60%] xl:w-[50%]">
            {todos.map((todo,key) => (
                <div key={key} className="flex justify-center m-1 w-full">
                    <input 
                        className={`p-2 text-base float-left w-full text-black bg-white ${todo.markAsCompleted ? "line-through": ""}`}
                        type="text"
                        name="todo"
                        value={todo.task}
                        disabled
                    />
                    <Icon icon={<FaCheck />} color="#3EC282" click={() => markAsCompleted(todo.id)}/>
                    <Icon icon={<FaEdit />} color="#563EC1" click={editTodo}/>
                    <Icon icon={<FaUpload />} color="#563EC1" click={updateTodo}/>
                    <Icon icon={<FaTrash />} color="#ec2c2c" click={removeTodo}/>
                </div>
            ))}
        </div>
    )
}

export default Todos