
import { useState } from "react"

export default function Counter2(){
    const [count, setCount] = useState(10)

    const handleAdd = () =>{
        const newCount = count / 2
        setCount(newCount)
    }
    const handleRem = () =>{
        const newCount = count * 2
        setCount(newCount)
    }

    return(
        <>
        <h2>Counter2 : {count}</h2>
         <button onClick={handleAdd}>ADD 2</button>
         <button onClick={handleRem}>REM 2</button>
        </>
    )
}