import { useState } from "react"


export default function Counter(){
    // const abc = useState(20222)
    // console.log(abc)
    const [count, setCount] = useState(10)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return(

        <div style={{ border:'2px solid lightblue', borderRadius:'10px', padding:'24px', margin:'20px'}}>
            <h2>Counter : {count} </h2>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce} style={{marginLeft:'10px'}}>REDUCE</button>
        </div>
    )
}