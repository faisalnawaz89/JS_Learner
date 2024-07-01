import { useState } from "react"

export default function HambergerMenu (){
    const [menu, setMenu] = useState(false)
    return(
        <>
            <button 
            onClick={()=>setMenu(true)}
            className="tabBtn">{(menu)?'Open':'Menu'}</button>
            <div className={`menu ${(menu)?'open':''}`}>
                <button 
                onClick={()=>setMenu(false)}
                className="closebtn">&times;</button>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Conatct</a></li>
                </ul>
            </div>
        </>
    )
}

