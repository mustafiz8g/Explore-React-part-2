import { useState } from "react"



export default function Team(){

    const [team, setTeam] = useState(11)

    const handleADD = () => {
      const  newPlayer = team + 1;
        setTeam(newPlayer)
    }
  
    const handleRemvoe = () => {
      const  newPlayer = team - 1;
        setTeam(newPlayer)
    }
  



    const teamStyle = {
        border: '2px solid red',
        padding: '19px',
        margin: '18px',
        borderRadius : '12px'
    }
    return(
        <div style={teamStyle}>
            <h2>Players : {team}</h2>
            <button onClick={handleADD}>ADD</button>
            <button onClick={handleRemvoe}>REmove</button>
        </div>
    )
}