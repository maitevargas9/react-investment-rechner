import { useState } from "react";

export default function UserInput({ userInput, setUserInput }) {
  const handleChange = e => {
    const { name, value } = e.target;
    setUserInput(prev => ({
      ...prev,
      [name]: value === "" ? "" : Number(value)
    }));
  };

  return (
    <section>
      <label>
        Initial Investment
        <input
          type="number"
          name="initialInvestment"
          value={userInput.initialInvestment}
          onChange={handleChange}
        />
      </label>
      <label>
        Annual Investment
        <input
          type="number"
          name="annualInvestment"
          value={userInput.annualInvestment}
          onChange={handleChange}
        />
      </label>
      <label>
        Yield
        <input
          type="number"
          name="yield"
          value={userInput.yield}
          onChange={handleChange}
        />
      </label>
      <label>
        Duration
        <input
          type="number"
          name="duration"
          value={userInput.duration}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
