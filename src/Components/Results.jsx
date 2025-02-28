import {
  computeInvestmentGrowth,
  currencyFormatter
} from "../util/investment.js";

export default function Results({ input }) {
  const rows = [
    "Year",
    "Investment value",
    "Annual interest",
    "Total interest income",
    "Total invested capital"
  ];

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
      </table>
    </div>
  );
}
