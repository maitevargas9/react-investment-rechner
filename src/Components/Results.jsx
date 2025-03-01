import {
  computeInvestmentGrowth,
  currencyFormatter
} from "../util/investment.js";

export default function Results({ userInput }) {
  const rows = [
    "Year",
    "Investment value",
    "Annual interest",
    "Total interest income",
    "Total invested capital"
  ];

  const resultsData = computeInvestmentGrowth(userInput);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {rows.map((row, index) =>
              <th key={index}>
                {row}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {resultsData.map(row =>
            <tr key={row.year}>
              <td>
                {row.year}
              </td>
              <td>
                {currencyFormatter.format(initialInvestment)}
              </td>
              <td>
                {currencyFormatter.format(row.annualInvestment)}
              </td>
              <td>
                {currencyFormatter.format(row.totalInvested)}
              </td>
              <td>
                {currencyFormatter.format(row.valueEndOfYear)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
