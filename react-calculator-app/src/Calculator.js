import React, { useState } from 'react';
import './style.css';

const Calculator=()=>
{
    const [input, setInput] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to evaluate the expression
  const handleEquals = () => {
    try {
      setInput((input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Function to clear the display
  const handleClear = () => {
    setInput("");
  };
    return(
        <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {/* Row 1 */}
          <button className="clear" onClick={handleClear}>C</button>
          <button onClick={() => handleClick("(")}>(</button>
          <button onClick={() => handleClick(")")}>)</button>
          <button className="operator" onClick={() => handleClick("/")}>/</button>
  
          {/* Row 2 */}
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="operator" onClick={() => handleClick("*")}>*</button>
  
          {/* Row 3 */}
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="operator" onClick={() => handleClick("-")}>-</button>
  
          {/* Row 4 */}
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="operator" onClick={() => handleClick("+")}>+</button>
  
          {/* Row 5 */}
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equals" onClick={handleEquals}>=</button>
        </div>
      </div>

    );
};

export default Calculator;