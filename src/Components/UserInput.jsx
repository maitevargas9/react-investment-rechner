import { useState } from "react";

export default function UserInput({ onChangeData }) {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    yield: 6,
    duration: 10
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    onChangeData(values);
  };

  return (
    <section>
      <label>
        Initial Investment
        <input
          type="number"
          name="initialInvestment"
          value={values.initialInvestment}
          onChange={handleChange}
        />
      </label>
      <label>
        Jahrliche Investition
        <input
          type="number"
          name="annualInvestment"
          value={values.annualInvestment}
          onChange={handleChange}
        />
      </label>
      <label>
        Erwartete Rendite
        <input
          type="number"
          name="yield"
          value={values.yield}
          onChange={handleChange}
        />
      </label>
      <label>
        Dauer
        <input
          type="number"
          name="duration"
          value={values.duration}
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
