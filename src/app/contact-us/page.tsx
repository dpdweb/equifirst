'use client';
import ContactForm from "../components/ContactForm";
import SubPageHeroBanner from "../components/SubPageHeroBanner";

export default function ContactUs() {
  return (
    <div>
      <SubPageHeroBanner
  title="Contact Us"
  subtitle="We’re Here to Help You Anytime"
  image="/assets/images/about-us-hero.jpg"
/>
    <div className="mt-20">
   
      <ContactForm />
      </div>
    </div>
  );
}
