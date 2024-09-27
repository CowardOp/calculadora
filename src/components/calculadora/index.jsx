import { useState } from "react";
import { evaluate } from "mathjs"; // Importa la función evaluate de math.js
import style from "./calculadora.module.css";

function Calculadora() {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState(null);

  // Maneja la entrada de botones numéricos y de operación
  const handleButtonClick = (value) => {
    if (result !== null) {
      setExpression(value);
      setResult(null);
    } else {
      setExpression((prev) =>
        prev === "0" && value !== "." ? value : prev + value
      );
    }
  };

  // Calcula el resultado usando math.js
  const handleEqualClick = () => {
    try {
      const evalResult = evaluate(expression); // Usa math.js para evaluar la expresión
      setResult(evalResult);
      setExpression(String(evalResult));
    } catch (error) {
      setResult("Error");
      setExpression("0");
    }
  };

  // Limpia la pantalla
  const handleClear = () => {
    setExpression("0");
    setResult(null);
  };

  // Elimina el último carácter
  const handleDelete = () => {
    setExpression((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <section className={style.screen}>{expression}</section>
        <section className={style["calc-buttons"]}>
          <div className={style["calc-button-row"]}>
            <button
              className={`${style["calc-button"]} ${style.double}`}
              onClick={handleClear}
            >
              C
            </button>
            <button className={style["calc-button"]} onClick={handleDelete}>
              &larr;
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("/")}
            >
              &divide;
            </button>
          </div>
          <div className={style["calc-button-row"]}>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("*")}
            >
              &times;
            </button>
          </div>
          <div className={style["calc-button-row"]}>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("-")}
            >
              &minus;
            </button>
          </div>
          <div className={style["calc-button-row"]}>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>
          </div>
          <div className={style["calc-button-row"]}>
            <button
              className={`${style["calc-button"]} ${style.triple}`}
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            <button
              className={style["calc-button"]}
              onClick={() => handleButtonClick(".")}
            >
              ,
            </button>
            <button className={style["calc-button"]} onClick={handleEqualClick}>
              =
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Calculadora;
