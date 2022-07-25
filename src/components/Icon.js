import React from "react"

const Icon = ({icon, color, click}) => {
    return (
        <div className={`flex items-center justify-center py-2 px-3 text-base bg-[${color}] h-full cursor-pointer`} onClick={click}>
            {icon}
        </div>
    )
}

export default Icon