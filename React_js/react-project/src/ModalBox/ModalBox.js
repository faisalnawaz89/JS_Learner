import { useState } from "react"

export default function ModalBox({title}){
    const [modal, setModal] = useState(false)

    return(
        <>
            <div className="container mx-auto py-5">
                <button 
                onClick={()=>setModal(!modal)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Open Modal Box</button>
                <div className={`modal ${modal ? 'open': ''}`}>
                    <h3>{title}</h3>
                    <p>The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.</p>
                    <button 
                    onClick={()=>setModal('')}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Close</button>
                </div>
            </div>
        </>
    )
}