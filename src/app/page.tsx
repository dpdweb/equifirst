import HeroSlider from "./components/HeroSlider";
// import FinanceOptions from './components/FinanceOptions';
import ScrollHighlight from './components/ScrollHighlight';
import UnlockDoor from "./components/UnlockDoor";
import MortgageServices from "./components/MortgageServices";
// import MortgageMadeSimple from "./components/MortgageMadeSimple";
import WhyEquifirst from "./components/WhyEquifirst";
// import Testimonials from "./components/Testimonials";
// import GotQuestion from "./components/GotQuestion";



export default function Home() {
  return (
  //   <div className="relative z-0 bg-no-repeat bg-bottom bg-[length:auto] min-h-screen"
  // style={{ backgroundImage: "url('/assets/images/home-bg.png')" }} >
    <div>

      <HeroSlider />
      <ScrollHighlight />
       <WhyEquifirst />
      <UnlockDoor />
      <MortgageServices />
      {/*<FinanceOptions />
      <MortgageMadeSimple />
      
      <Testimonials />
      <GotQuestion /> */}
      
      </div>
  );
}
