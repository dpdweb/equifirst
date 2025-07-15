'use client';
import Image from 'next/image';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';
import { useSettings } from '../context/SettingsContext';
import Landbot from './Landbot'; 


export default function Footer() {
  const { settings } = useSettings();

  return (
    <footer className="bg-ef-dark-gray text-gray-300 pt-10 mt-12">
      <Landbot />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
           <Image
  src="/assets/images/footer-logo.png"
  alt="Equifirst"
  width={216}
  height={44}
  className="mb-4 mx-auto sm:mx-0"
/>
            <p className="text-sm leading-relaxed mt-5 sm:mt-12">
              2803, Control Tower, Motor City
              <br />
              Detroit Road, Dubai, UAE
            </p>
            <p className="text-sm leading-relaxed mt-5 sm:mt-12">
              info@equifirst.ae
            </p>
          </div>

          <div className="hidden md:block">
            <h4 className="text-white font-semibold mb-3">COMPANY</h4>
            <ul className="space-y-2 text-sm">
               <li>
                <Link href="/" className="footer-nav-link">
                  About Us
                </Link>
              </li>
             <li>
                <Link href="/" className="footer-nav-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-nav-link">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-nav-link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className="footer-nav-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div  className="hidden md:block">
            <h4 className="text-white font-semibold mb-3">EXPLORE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="footer-nav-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="footer-nav-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

                  {/* Social media icons */}
        <div>
          <h4 className="text-white font-semibold mb-3 hidden md:block">SOCIALS</h4>
        <div className="mt-8 flex justify-center sm:justify-start space-x-6">
      
        <SocialMediaLinks settings={settings} />

        </div>
        </div>

        </div>


        <p className="text-center text-xs text-ef-light-gray mt-6 border-t border-gray-600 py-6">
          © Copyright {new Date().getFullYear()} Equifirst. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
