import { useState } from "react";

export default function UserInput({ userInput, setUserInput }) {
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    if (name === "duration" && value < 1) {
      setErrors(prev => ({
        ...prev,
        duration: "Bitte geben Sie eine gültige Dauer ein (mind. 1 Jahr)."
      }));
    } else {
      setErrors(prev => ({ ...prev, duration: null }));
    }
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
          name="yields"
          value={userInput.yields}
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
        {errors.duration &&
          <p style={{ color: "red" }}>
            {errors.duration}
          </p>}
      </label>
    </section>
  );
}
