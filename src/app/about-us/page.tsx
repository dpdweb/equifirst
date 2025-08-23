'use client';
import SubPageHeroBanner from "../components/SubPageHeroBanner";
import OurTeam from "../components/OurTeam";
import WhoWeAre from "../components/WhoWeAre";
import RedefinedYourHome from "../components/RedefinedYourHome";


export default function AboutUs() {
  return (
    <div>
    <div className="ef-sub-page-top-style">
      <SubPageHeroBanner
        title="About Us"
        subtitle="Your Trusted Mortgage Partner"
        image="/assets/images/about-us-hero.jpg"
      />
      </div>
       <WhoWeAre />
      <OurTeam />
      <RedefinedYourHome />
    
    </div>
  );
}
