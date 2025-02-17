import { useState } from "react"

const Count = () => {
    const [increment , setIncrement] = useState(0);
    const [decrement , setDecrement] = useState(20) 
  return (
    <div>
           <div>
      <button onClick={() =>setIncrement(prev => prev +1)}>{increment}</button>
      <button onClick={() => setIncrement(0)}>reset increment : {increment}</button>
      <button onClick={() => setDecrement(pre => pre -1)}>{decrement}</button>
      <button onClick={() => setDecrement(0)}>reset dencrement : {decrement}</button>
       
    </div>
    </div>
  )
}

export default Count