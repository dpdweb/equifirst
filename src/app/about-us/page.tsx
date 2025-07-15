'use client';
import SubPageHeroBanner from "../components/SubPageHeroBanner";
import OurTeam from "../components/OurTeam";
import WhoWeAre from "../components/WhoWeAre";
import RedefinedYourHome from "../components/RedefinedYourHome";


export default function AboutUs() {
  return (
    <div>
    <div className="ef-sub-page-top-style">
      {/* <MortgageCalculator /> */}
      <SubPageHeroBanner
        title="About Us"
        subtitle="Welcome to Equifirst Capital Financing"
        image="/assets/images/about-us-hero.png"
      />
      </div>
       <WhoWeAre />
      <OurTeam />
      <RedefinedYourHome />
    
    </div>
  );
}
