import React from "react"
import { FaPlus,FaTrash } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-br from-[#ec2c2c] to-[#e9993d] text-white">
      <h1 className="text-4xl mx-6 mt-6 uppercase font-bold">Add Todo List</h1>
      <div className="border-t-4 border-white w-8 mb-5 mt-2"></div>
      <div className="flex w-full justify-center">
        <div className="flex justify-center items-center w-[75%] lg:w-[60%] xl:w-[50%]">
          <input className="p-2 text-base float-left w-full" type="text" placeholder="Add Task..."/>
          <div className="flex items-center justify-center p-2 text-base bg-[#e9993d] h-full">
            <FaPlus />
          </div>
          <div className="flex items-center justify-center p-2 text-base bg-[#ec2c2c] h-full">
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
