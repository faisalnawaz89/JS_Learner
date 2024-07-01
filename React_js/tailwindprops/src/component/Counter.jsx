import { useState } from "react";


export default function Counter(){
const [count, setCount] = useState(0)
    return(
        <>
            <h2 style={{fontSize:'40px'}}>{count}</h2>
            <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={()=>setCount((count)=> count + 1)}
            >Add Number</button>
            <button
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={()=> setCount((count)=> count - 1)}
            >Less Number</button>
        </>
    )
}