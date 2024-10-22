
import './App.css'
import Counter from './Counter'
import Counter2 from './counter2'
import Team from './Team'
import Users from './Users'
import Users2 from './Users2'


const addToFive = (num) => {
  alert(num + 3)
}

function handleClick() {
  alert('button Click')
}

const handleClick2 = () => {
  alert('click 2')
}
function App() {


  return (
    <>
      <h1> React Core 2 </h1> 
    <Users2></Users2>
    <Users></Users>

    <Counter></Counter>
    <Counter2></Counter2>
    <Team></Team>

    <div style={{display:'flex', gap:'10px'}}>
    <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {addToFive(2)}}>Sum</button>
      <button onClick={()=>{alert('third click')}}>Click 3</button>
    </div>
    </>
  )
}

export default App
