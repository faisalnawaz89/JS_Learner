import { useState } from "react"
import { AccordionData } from "./AccordionData"

//Proccess 1
export default function Accordion () {
    const [accordion, setAccordion] = useState(AccordionData[0].id)
    return(
        <>
            <div className="container">
                <div className="row">
                    {AccordionData.map((item,i)=>(
                        <div key={i} className={`accordion ${accordion === item.id ? 'active' : ''}`}>
                            <h4 onClick={()=>setAccordion(item.id)} className="accordion-tab">{item.title}</h4>
                            <p className="accordion-content">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}