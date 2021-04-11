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
  const checkSign = /\/|\+|-|x/g;
  const checkEqual = /=/g;
  const checkDecimal = /^\./g;
  const checkClear = /AC/;
  const checkOpenParenthesis = /^(0\()/g;
  const checkStartZeroThenNumber = /^0[0-9]/g;
  const checkStartDoubleZero = /^0{2}/g;
  const checkMultiplySign = /x/g;

  const clear = () => {
    setTempScreen("");
    setResult("0");
  }

  const equal = (e) => {

  }

  const equation = (e) => {
    
  }

  const number = (e) => {

  }



  const handleClick = (e) => {
    
    let numberTyped = e.currentTarget.dataset.touche;
    console.log(numberTyped)
    let stringToTransform = tempScreen + numberTyped;
    stringToTransform = stringToTransform.replace(checkStartDoubleZero, "0").replace(checkStartZeroThenNumber, numberTyped).replace(checkDecimal, "0.").replace(checkOpenParenthesis, "(").replace(checkMultiplySign, "*");


     

    
    if(Array.isArray(numberTyped.match(checkClear))){
      return clear();
    }else if(
      Array.isArray(numberTyped.match(checkSign))
    ){
      
    }else if(Array.isArray(numberTyped.match(checkEqual))){
      return equal(numberTyped)
    }else{
      
    }
    
    
    setTempScreen(stringToTransform);
    return  setResult(result+numberTyped);
    
    
    
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
