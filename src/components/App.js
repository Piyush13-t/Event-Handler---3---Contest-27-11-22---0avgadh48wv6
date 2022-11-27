import React from 'react'
import '../styles/App.css';
const App = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const handleInput = (event) =>{
   // use console.log
   if(event.target.id === "text-input")
   setText(event.target.value);
   else setNumber(event.target.value);
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} value={text} onChange={handleInput} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} value={number} onChange={handleChange} />
      <br/>
    </div>
  )
}


export default App;
