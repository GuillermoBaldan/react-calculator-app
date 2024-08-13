import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="container">
      <h1 className="center-align">Calculadora</h1>
      <div className="card calculator">
        <div className="card-content">
          <div className="display">
            <input type="text" value={input} readOnly className="display-operations"/>
            <input type="text" value={result} readOnly className="display-result"/>
          </div>
          <div className="keypad">
            <div className="row">
              <button className="col s3 btn" onClick={() => handleClick("+")}>+</button>
              <button className="col s3 btn" onClick={() => handleClick("1")}>1</button>
              <button className="col s3 btn" onClick={() => handleClick("2")}>2</button>
              <button className="col s3 btn" onClick={() => handleClick("3")}>3</button>
            </div>
            <div className="row">
              <button className="col s3 btn" onClick={() => handleClick("-")}>-</button>
              <button className="col s3 btn" onClick={() => handleClick("4")}>4</button>
              <button className="col s3 btn" onClick={() => handleClick("5")}>5</button>
              <button className="col s3 btn" onClick={() => handleClick("6")}>6</button>
            </div>
            <div className="row">
              <button className="col s3 btn" onClick={() => handleClick("*")}>*</button>
              <button className="col s3 btn" onClick={() => handleClick("7")}>7</button>
              <button className="col s3 btn" onClick={() => handleClick("8")}>8</button>
              <button className="col s3 btn" onClick={() => handleClick("9")}>9</button>
            </div>
            <div className="row">
              <button className="col s3 btn" onClick={clear}>C</button>
              <button className="col s3 btn" onClick={() => handleClick("/")}>/</button>
              <button className="col s3 btn" onClick={() => handleClick(".")}>.</button>
              <button className="col s3 btn" onClick={() => handleClick("0")}>0</button>
              
            </div>
            <div className="row">
              <button className="col s12 btn" onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
