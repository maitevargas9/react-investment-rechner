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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label className="user-input label">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label id="user-input label">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="user-input label">Yield</label>
          <input
            type="number"
            name="yields"
            value={userInput.yields}
            onChange={handleChange}
          />
        </p>
        <p>
          <label id="user-input label">Duration</label>
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
        </p>
      </div>
    </section>
  );
}
