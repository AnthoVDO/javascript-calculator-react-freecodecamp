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
  const [result, setResult] = useState("0");
  const [elementBefore, setElementBefore] = useState('');

  const checkSignWithoutMinus = /\/|\+|x|X|\*/g;
  const checkSignToEquation = /\/|\+|-|x|X|\*|([\d]\()|(\)[\d])/g;
  const checkDoubleMinus = /--/g;
  const checkDoubleDecimal = /\.\./g;

  const checkEqual = /=/g;
  const checkDecimal = /^\./g;
  const checkClear = /AC/;
  const checkOpenParenthesis = /^(0\()/g;
  const checkStartZeroThenNumber = /^0[\d]/g;
  const checkStartDoubleZero = /^0{2}/g;
  const checkMultiplySign = /x/g;
  const checkBeforeOpenParenthesis = /[\d](\()/g;
  const checkAfterCloseParenthesis = /(\))[\d]/g;
  const checkDoubleParenthesis = /(\(){2}|(\)){2}/g;
  const checkMinusBefore = /(-(\/|\+|-|x|\*|X))$|\+-|\/\/|\*\*/g;
  const checkTripleSign = /((\*|X|x|\/)(-)(\*|X|x|\/|\+))/g;
  const checkTwoFollowingSign = /(((\*|X|x|\/|\+)+)(\*|X|x|\/|\+))$/g;
  const checkStartWithSign = /^(\/|\*|x|X|\+)/g;

  const clear = () => {
    setTempScreen("");
    setResult("0");
    setElementBefore("");
  }

  const equal = (e) => {
    let number = eval(tempScreen);
    setResult(number.toString());
    setElementBefore("=");
    return setTempScreen(tempScreen+'='+number);
  }

  const equation = (e) => {
    console.log("equation function");
    let number = e.replace(checkMultiplySign, "*");
    if(elementBefore === "("){
      return setResult("("+number);
    }
    return setResult(number);
  }

  



  const handleClick = (e) => {

    let numberTyped = e.currentTarget.dataset.touche;
    let tempResult =  result;

    if(Array.isArray(numberTyped.match(checkClear))){
      return clear();
    }

    if(Array.isArray(result.match(/\./)) && numberTyped === "."){
      return result
    }

    if(Array.isArray(numberTyped.match(checkEqual))){
      return equal(numberTyped);
    }

    if(elementBefore === "="){
      setTempScreen(tempResult+numberTyped);
      setResult(numberTyped);
      return setElementBefore(numberTyped);
      
    }



    
    
    let stringToTransform = result + numberTyped;
    let stringToTransformTempScreen = tempScreen + numberTyped;
    

    stringToTransform = stringToTransform
    .replace(checkStartDoubleZero, "0")
    .replace(checkStartZeroThenNumber, numberTyped)
    .replace(checkDecimal, "0.")
    .replace(checkOpenParenthesis, "(")
    .replace(checkSignWithoutMinus, "")
    .replace(checkDoubleParenthesis, numberTyped)
    .replace(checkDoubleMinus, '-')
    .replace(checkDoubleDecimal, ".")
    .replace(checkMinusBefore, numberTyped)
    .replace(checkMultiplySign, "*")
    ;

    

    stringToTransformTempScreen = stringToTransformTempScreen
    .replace(checkStartDoubleZero, "0")
    .replace(checkStartZeroThenNumber, numberTyped)
    .replace(checkDecimal, "0.")
    .replace(checkOpenParenthesis, "(")
    .replace(checkBeforeOpenParenthesis, elementBefore+"*"+numberTyped)
    .replace(checkAfterCloseParenthesis, elementBefore+"*"+numberTyped)
    .replace(checkDoubleParenthesis, numberTyped)
    .replace(checkDoubleMinus, "-")
    .replace(checkDoubleDecimal, ".")
    .replace(checkMinusBefore, numberTyped)
    .replace(checkTripleSign, numberTyped)
    .replace(checkTwoFollowingSign, numberTyped)
    .replace(checkStartWithSign,"0"+numberTyped)
    .replace(checkMultiplySign, "*")
    ;



    setTempScreen(stringToTransformTempScreen);
    setElementBefore(numberTyped);
    
    
    if(Array.isArray(stringToTransform.match(checkBeforeOpenParenthesis))|| Array.isArray(stringToTransform.match(checkAfterCloseParenthesis)) ||Array.isArray(numberTyped.match(checkSignToEquation))){
      return equation(numberTyped);
    }else{
      setResult(stringToTransform);
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
