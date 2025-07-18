import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ef-dark-gray text-gray-300 pt-10 mt-12">
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

          <div>
            <h4 className="text-white font-semibold mb-3">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="footer-nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="footer-nav-link">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="footer-nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="footer-nav-link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="footer-nav-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="footer-nav-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">EXPLORE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faqs" className="footer-nav-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="footer-nav-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-nav-link">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

                  {/* Social media icons */}
        <div>
          <h4 className="text-white font-semibold mb-3">SOCIALS</h4>
        <div className="mt-8 flex justify-center sm:justify-start space-x-6">
      
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 footer-nav-link"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 footer-nav-link"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 footer-nav-link"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 footer-nav-link"
          >
            <Linkedin size={20} />
          </a>
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
