import InvestmentRechner from "../assets/investment-rechner.png";

export default function Header() {
  return (
    <header id="header">
      <img src={InvestmentRechner} alt="Quiz Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
