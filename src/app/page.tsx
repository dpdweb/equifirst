'use client';
import { useRef } from "react";
import HeroSlider from "./components/HeroSlider";
import FinanceOptions from './components/FinanceOptions';
import ScrollHighlight from './components/ScrollHighlight';
import UnlockDoor from "./components/UnlockDoor";
import MortgageServices from "./components/MortgageServices";
import WhyEquifirst from "./components/WhyEquifirst";
import Testimonials from "./components/Testimonials";
import GotQuestion from "./components/GotQuestion";
import MortgageCalculator from './components/MortgageCalculator';
// import ScrollHighlightUpdate from "./components/ScrollHighlightUpdate";
import MortgageMadeSimple from "./components/MortgageMadeSimple";
// import ContactForm from './components/ContactForm'; 
// Import the contact form




export default function Home() {
  const mortgageRef = useRef<HTMLDivElement | null>(null);

  const scrollToMortgage = () => {
    mortgageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  //   <div className="relative z-0 bg-no-repeat bg-bottom bg-[length:auto] min-h-screen"
  // style={{ backgroundImage: "url('/assets/images/home-bg.png')" }} >
    <div>

      <HeroSlider onScrollClick={scrollToMortgage} />
      <ScrollHighlight />
      <Testimonials />
      <WhyEquifirst onScrollClick={scrollToMortgage}  />
       
      <UnlockDoor />
      <div ref={mortgageRef}  className="scroll-mt-28">
        <MortgageServices />
      </div>
      <FinanceOptions />
      {/* <div ref={mortgageRef}  className="scroll-mt-0"> */}
      <MortgageMadeSimple />
      {/* </div> */}
      
      <MortgageCalculator />
      {/* <ContactForm /> */}
      

      <GotQuestion /> 
      
      </div>
  );
}
