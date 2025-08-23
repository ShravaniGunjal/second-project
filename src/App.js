import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
  const[num=0, setNum] = useState();
  
  function onCount(){
   setNum(num+1)
  }
  return (
    <div>
      <div>{num}</div>
      <div><button onClick={onCount}>Count</button></div>
    </div>
  );

}

export default App;