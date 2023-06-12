import { useState , useMemo} from 'react';
import './App.css';

function App() {

const [add,setAdd]=useState(0)
const [minus,setMinus] = useState(100)

const Multiplication = useMemo (function multiply (){
  console.log("****")
  return add * 10
},[add])

const increment = ()=>{
  setAdd (add +1)
}
const decrement = ()=>{
  setMinus (minus - 1)
}


  return (
    <div className="App">
     <div className="home">
      <h1>{ Multiplication }</h1>
      <button onClick={increment}>increment</button>
      <span>{add}</span> <br /> <br />
      <button onClick={decrement}>decrement</button>
      {minus}
     </div>
    </div>
  );
}

export default App;
