import { useState } from 'react';

import { useRef } from 'react';

export default function Counter() {
  let countRef = useRef(0);

  function handleIncrement() {
    countRef.current = countRef.current + 1;
  }

  return (
    <>
      <span>Count: {countRef.current}</span>
      <button onClick={handleIncrement}>
        Click me
      </button>
    </>
  )
}

//1 
// export default function App() {
//   const [counter, setCounter] = useState(5);

//   return (
//     <>
//       <span>{counter}</span>
//       <button onClick={() => {
//         setCounter(counter + 5);
//         setCounter(counter + 5);
//         alert(counter);
//         setCounter(counter + 5);
//         setCounter(counter + 5);
//       }}>Increment</button>
//     </>
//   )
// }