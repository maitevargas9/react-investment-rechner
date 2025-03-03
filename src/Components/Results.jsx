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
      <table id="result">
        <thead id="result thead">
          <tr>
            {rows.map((row, index) =>
              <th key={index}>
                {row}
              </th>
            )}
          </tr>
        </thead>
        <tbody id="result tbody">
          {resultsData.map(row =>
            <tr key={row.year}>
              <td>
                {row.year}
              </td>
              <td>
                {currencyFormatter.format(row.valueEndOfYear)}
              </td>
              <td>
                {currencyFormatter.format(row.interest)}
              </td>
              <td>
                {currencyFormatter.format(
                  row.valueEndOfYear -
                    (initialInvestment + row.annualInvestment * row.year)
                )}
              </td>
              <td>
                {currencyFormatter.format(
                  initialInvestment + row.annualInvestment * row.year
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
