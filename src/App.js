import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[1,2,3,4,5,6,7,8,9,10];
  let a=[2,3,4,5];
  let multiplication=0;
  return (
    <div>{
      a.map((singleElement)=>{
        return <div>
        {arr.map((Element)=>{
          multiplication=singleElement*Element;
          return(multiplication +"");
        })}
        
        </div>
      })}
  
</div>
    

  );
}

export default App;