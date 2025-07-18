import { useState } from "react";
import "./Calculator.css"; // Importamos los estilos

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Definir botones agrupados
  const buttonRows = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    [".", "0", "C", "+"],
    ["="],
  ];

  // Función para manejar los clicks en los botones
  const handleClick = (value) => {
    switch (value) {
      case "=":
        calculateResult();
        break;
      case "C":
        clearInput();
        break;
      default:
        setInput((prev) => prev + value);
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const safeEval = new Function("return " + input);
      setResult(safeEval());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculadoraa React</h2>
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="calculator-result">{result}</div>
      <div className="calculator-buttons">
        {buttonRows.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((value) => (
              <button
                key={value}
                onClick={() => handleClick(value)}
                className={`calculator-button ${
                  ["C", "="].includes(value) ? "clear" : ""
                } ${["/", "*", "-", "+"].includes(value) ? "operator" : ""}`}
              >
                {value}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
