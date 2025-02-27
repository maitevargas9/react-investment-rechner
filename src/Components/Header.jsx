import InvestmentRechner from "../assets/investment-rechner.png";

export default function Header() {
  return (
    <header>
      <img src={InvestmentRechner} alt="Quiz Logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
