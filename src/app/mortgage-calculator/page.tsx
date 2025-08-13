
import MortgageCalculator from '../components/MortgageCalculator';
import SubPageHeroBanner from "../components/SubPageHeroBanner";

export default function Page() {
  return (
    <div>
<SubPageHeroBanner
  title="Mortgage Calculator"
  subtitle="Easily calculate your mortgage payments"
  image="/assets/images/about-us-hero.png"
/>

    <div className="p-6 mt-4">
      <MortgageCalculator />
    </div>
    </div>
  );
}