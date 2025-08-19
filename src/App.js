import logo from './logo.svg';
import './App.css';

function App() {
  let number1=10,number2=20,result=0;
  function add(){
    result=number1+number2;
    console.log("The Addition is:"+result);
  }
  function subtract(){
    result=number1-number2;
    console.log("The Subtraction is:"+result);
  }
  function multiply(){
    result=number1*number2;
    console.log("The multiplication is:"+result);
  }
  function divide(){
    result=number1/number2;
    console.log("The Division is:"+result);
  }
  
  return (
   <div>
    <div>Calculator</div>
    <div>The first number is 10</div>
    <div>The second number is 20</div>
    <div><button onClick={add}>Addition</button></div>
    <div><button onClick={subtract}>Subtraction</button></div>
    <div><button onClick={multiply}>Multiplication</button></div>
    <div><button onClick={divide}>Division</button></div>
   </div>
  );
}

export default App;
