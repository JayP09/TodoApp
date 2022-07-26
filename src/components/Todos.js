import React from "react"
import Todo from './Todo'

const Todos = (props) => {
    return (
        <div className="mt-12 mb-12 flex flex-col justify-center items-center w-[75%] lg:w-[60%] xl:w-[50%]">
            {props.todos.map((todo) => (
                <Todo {...props} key={todo.id} todo={todo}/>
            ))}
        </div>
    )
}

export default Todos