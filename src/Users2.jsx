import EachUser from './EachUser'
import './Users2.css'
import { useEffect, useState } from "react"


export default function Users2(){
   
    const[users, setUsers] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])

    return(
        <>
         <div>
             <h2>Users2:</h2>
             {
                users.map(user => <EachUser user={user}></EachUser>)
             }
         </div>
        </>
    )
}


/***
 * 1.state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 6. display data on the component
 * 
 */