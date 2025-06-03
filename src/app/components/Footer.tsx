'use client';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <Image
            src="/assets/images/footer-logo.png"
            alt="Equifirst"
            width={216}
            height={44}
            className="h-6 mb-2"
          />
          <p>2803, Control Tower, Motor City, Dubai</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Calculator</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      </div>
      <p className="text-center text-sm mt-6">© Copyright 2025 Equifirst. All Rights Reserved.</p>
    </footer>
  );
}
