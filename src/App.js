import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
  const [name, setName] = useState();
  const [showBlock, setShowBlock] = useState(false);
  // const [image, setImage] = useState();

  function handleNameChange(event) {
    setName(event.target.value)
  }
  function OnSubmitClick() {
    setShowBlock(true)
  }
  return (
    <div>
      <div><input name="text" value={name} onChange={handleNameChange} /></div>
      {/* <div>{name}</div> */}
      <button onClick={OnSubmitClick}>Submit</button>
     {showBlock ? <div>
        <div>{name}</div>
        <img src='https://4.imimg.com/data4/MM/YO/MY-9960839/flower-gardens.jpg' width='200px' />
      </div>:<h1>Click on submit button</h1>}
    </div>
  );

}

export default App;