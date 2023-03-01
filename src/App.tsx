import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const formatter = (value: number) =>
    `$ ${value.toFixed(2)}`.replace(/\B(?=(\d{3})+(?!\d))/g, "$1,");

  const parser = (value: number) =>
    value!.toFixed(2).replace(/\$\s?|([,.]*)/g, "");

  return (
    <div className="App">
      <h1>Meus testes</h1>
      <div className="card">
        <input
          type="number"
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button>output formatter is {formatter(number)}</button>
        <button>output parser is {parser(number)}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
