import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[1,2,3,4,5,6];
  return (
    <div>{
      arr.map((singleEle)=>{
        return <div>{singleEle*2}</div>
      })
}
</div>
    

  );
}

export default App;
