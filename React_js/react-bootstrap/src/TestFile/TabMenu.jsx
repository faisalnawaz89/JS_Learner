import { useState } from "react";
import { AccordionData } from "./AccordionData";

export default function TabMenu () {
    const [tab, setTab] = useState(AccordionData[0].id)
    return(
        <>
            <ul className="tabmenu">
                {AccordionData.map((tabItem)=>(
                    <li 
                    className={tab === tabItem.id ? 'selected': ''}
                    onClick={()=>setTab(tabItem.id)}>{tabItem.title}</li>
                ))}
            </ul>
            <div className="tabcontent">
            {AccordionData.map((tabItem)=>(
                <div className={`tab-inner ${tab === tabItem.id ? 'active':''}`}>
                    <h5>{tabItem.title}</h5>
                    <p>{tabItem.content}</p>
                </div>
            ))}
            </div>
        </>
    )
}