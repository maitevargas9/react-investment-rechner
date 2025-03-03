import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    yields: 6,
    duration: 10
  });

  const isValid = userInput.duration >= 1;

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
      {isValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;
