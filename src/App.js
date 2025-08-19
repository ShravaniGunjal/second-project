import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[1,2,3,4,5,6];
  return (
    <div>{
      arr.map((singleEle)=>{
        if(singleEle%2===0){
          return <i><div>{singleEle}</div></i>
        }
        else{
          return <strong><div>{singleEle}</div></strong>
        }
      })
}
</div>
    

  );
}

export default App;
