import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
  const[number1, setNumber1] = useState();
  const[number2, setNumber2] = useState();
  const[addition, setAddition] = useState();
  const[subtraction, setSubtraction] = useState();
  const[multiplication, setMultiplication] = useState();
  const[division, setDivision] = useState();

  function handleNumber1Change(event) {
    setNumber1(parseInt(event.target.value))
  }
  function handleNumber2Change(event) {
    setNumber2(parseInt(event.target.value))
  }
  function onSubmit(){
    setAddition(number1+number2);
    setSubtraction(number1-number2);
    setMultiplication(number1*number2);
    setDivision(number1/number2)
  }
  return (
    <div>
      <div><input name='number' value={number1} placeholder='Enter First Number' onChange={handleNumber1Change}/></div>
      <input name='number' value={number2} placeholder='Enter Second Number' onChange={handleNumber2Change}/>
      <div><button onClick={onSubmit}>Submit</button></div>
      {addition &&<h1>Addition of {number1} and {number2} is : {addition}</h1>}
      {subtraction &&<h1>Subtraction of {number1} and {number2} is : {subtraction}</h1>}
      {multiplication &&<h1>Multiplication of {number1} and {number2} is : {multiplication}</h1>}
      {division &&<h1>Division of {number1} and {number2} is : {division}</h1>}
    </div>
  );

}

export default App;