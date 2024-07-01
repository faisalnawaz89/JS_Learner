import { useState } from "react";

export default function ColorChanger(){
const [color, setColor] = useState('black')

return(
    <>
       <div className="w-full h-screen duration-200" style={{backgroundColor:color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={()=> setColor('red')}
                >Red</button>
                <button
                onClick={()=> setColor('green')}
                >Green</button>
                <button 
                onClick={()=> setColor('blue')}
                >Blue</button>
            </div>
        </div>
        </div>
    </>
)

}