import { useState } from "react";

function App (){
  const [counter, setCounter] = useState(0)
  const addnum = () => {
    setCounter(addnums => addnums + 1)
  }
  const lessNum = () => {
    setCounter(counter - 1)
  }

  return(
  
    <>
    <button onClick={addnum}>add Num: {counter}</button>
    <button onClick={lessNum}>Less Num: {counter}</button>
    </>
  )

}
export default App