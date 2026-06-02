
"use client";
import MortgageCalculator from '../components/MortgageCalculator';
import SubPageHeroBanner from "../components/SubPageHeroBanner";

export default function Page() {


  return (
    <div>
<SubPageHeroBanner
  title="Mortgage Calculator"
  subtitle="Plan Your Mortgage Instantly"
  image="/assets/images/mortgage-calculator-hero.jpg"
/>

    <div className="md:p-6 mt-4">
      <MortgageCalculator />
    </div>


    </div>
  );
}