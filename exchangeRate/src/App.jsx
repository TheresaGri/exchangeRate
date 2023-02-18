import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { exchangeData } from "./data";

function App() {
  const [inputCurrency1, setInputCurrency1] = useState("");
  const [inputCurrency2, setInputCurrency2] = useState("");
  const [result, setResult] = useState("");
  

  async function showData() {
    let data = await exchangeData(inputCurrency1, inputCurrency2);
    console.log(data);
    setResult(data.result);
  }

  return (
    <div className="App">
      <input
        placeholder="Enter a currency"
        value={inputCurrency1}
        onChange={(event) => setInputCurrency1(event.target.value)}
      />

      <Button onPress={() => showData()}>Load</Button>
      <input
        placeholder="Enter a currency"
        value={inputCurrency2}
        onChange={(event) => setInputCurrency2(event.target.value)}
      />

      {result}
    </div>
  );
}

export default App;
