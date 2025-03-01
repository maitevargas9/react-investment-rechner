export function computeInvestmentGrowth({
  initialInvestment,
  annualInvestment,
  yields,
  duration
}) {
  const investmentTimeline = [];
  let currentInvestment = initialInvestment;

  for (let year = 1; year <= duration; year++) {
    const yearlyInterest = currentInvestment * (yields / 100);
    currentInvestment += yearlyInterest + annualInvestment;

    investmentTimeline.push({
      year,
      interest: yearlyInterest,
      valueEndOfYear: currentInvestment,
      annualInvestment
    });
  }

  return investmentTimeline;
}

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
