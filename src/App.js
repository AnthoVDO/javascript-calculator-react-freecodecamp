import { useState } from 'react';
import Wrapper from './components/Wrapper';
import './style/App.scss';

function App() {

  const buttons = [
    {"obj":["(", "openParenthesis"]} , 
    {"obj":[")", "closeParenthesis"]}, 
    { "obj":["AC", "clear"]},
    {"obj":["/", "divide"]}, 
    {"obj":["7", "seven"]}, 
    {"obj":["8", "eight"]}, 
    {"obj":["9", "nine"]}, 
    {"obj":["x", "multiply"]}, 
    {"obj":["4", "four"]}, 
    {"obj":["5", "five"]}, 
    {"obj":["6", "six"]}, 
    {"obj":["-", "subtract"]}, 
    {"obj":["1", "one"]}, 
    {"obj":["2", "two"]}, 
    {"obj":["3", "three"]}, 
    {"obj":["+", "add"]}, 
    {"obj":["0", "zero"]}, 
    {"obj":[".", "decimal"]}, 
    {"obj":["=", "equals"]}
  ]

  

  const [tempScreen, setTempScreen] = useState("");
  const [result, setResult] = useState('0');
  const checkSign = /\/|\+|\-|x/g;
  const checkEqual = /\=/g;
  const checkDecimal = /\./g;

  const clear = () => {
    setTempScreen("");
    setResult("0");
  }

  const equal = (e) => {

  }

  const equation = (e) => {
    console.log(e)
  }



  const handleClick = (e) => {
    
    let numberTyped = e.currentTarget.dataset.touche;
    //console.log(numberTyped);
    
    if(numberTyped === "AC"){
      return clear();
    }else if(
      numberTyped === "/" || "x" || "+" || "-"
    ){
      return equation (numberTyped);
    }else{
      setTempScreen(tempScreen+numberTyped);
      setResult(result+numberTyped);
    }
    
  }


  return (
    <div className="App">
      <Wrapper 
      buttons={buttons} 
      handleClick={handleClick}
      tempScreen={tempScreen}
      result={result} />
    </div>
  );
}

export default App;
