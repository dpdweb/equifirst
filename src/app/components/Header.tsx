'use client';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import { useSettings } from '../context/SettingsContext';
import { usePathname } from 'next/navigation';
import SocialMediaLinks from './SocialMediaLinks';




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { settings, loading } = useSettings();
  const pathname = usePathname();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdownIndex(null);
  };

  const handleDropdownClick = () => {
    setOpenDropdownIndex(null); // closes the dropdown
  };

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
  {
    label: 'Services',
    children: [
      { href: '/services/off-plan-finance', label: 'Off-Plan Finance' },
      { href: '/services/secondary-market-finance', label: 'Secondary Market Finance' },
      { href: '/services/equity-release', label: 'Equity Release' },
      { href: '/services/handover-finance', label: 'Handover Finance' },
      { href: '/services/buyout-refinance', label: 'Buyout / Refinance' },
      { href: '/services/non-resident-mortgage', label: 'Non-Resident Mortgage' },
    ],
  },
  { href: '/blogs', label: 'Blogs' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];




  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once to set initial scroll state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // if (loading) return null;
  if (!hasMounted) return null; // Prevent hydration mismatch

  return (
    <div>
    <header
      className={`fixed  top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-[rgba(255,255,255,0.8)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div>
          <Image
            src={settings?.site_logo_desktop || "/assets/images/equifirst_logo.png"}
            alt={settings?.site_title || "Equifirst"}
            width={600}
            height={150}
            className=" w-[150px] md:w-[215px] h-auto object-contain"
            priority
          />
      
        </div>

     <nav className="hidden md:flex gap-6 text-ef-gray font-medium relative">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.href ? (
            <Link
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ) : (
            <span className="nav-link cursor-pointer">{item.label}</span>
          )}

          {/* Dropdown */}
          {item.children && openDropdownIndex === index && (
            <div className="absolute left-0 top-full mt-0 flex flex-col bg-white shadow-lg rounded-lg z-50 min-w-[200px] overflow-hidden">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={handleDropdownClick}
                  className="px-4 py-2 text-sm hover:bg-ef-blue text-ef-gray hover:text-white whitespace-nowrap"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>

        <div className="md:hidden pt-2">
          <button onClick={() => setIsOpen(!isOpen)} className={`${
      scrolled ? 'text-black' : 'text-white'
    } transition-colors duration-200`}>
            <Menu size={24} />
          </button>
        </div>

        <div className="hidden md:block">
          <button className="btn">Contact Us</button>
        </div>
      </div>


    </header>
          {isOpen && (

      <div className="fixed md:hidden inset-0 z-50 pr-[25%] bg-black text-white flex flex-col justify-between p-6 transition-transform duration-300 animate-menu-slide-in-left">

        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-lg items-end mt-8 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href} onClick={() => setIsOpen(false)}
              href={item.href}
              className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto space-y-4 text-sm text-center">
          <Image
            src={settings?.footer_logo || "/assets/images/equifirst_logo.png"}
            alt={settings?.site_name || "Equifirst"}
            width={140}
            height={60}
            className="mx-auto h-auto object-contain"
          />

          <div className="text-white">
            <p dangerouslySetInnerHTML={{ __html: settings?.site_address }} />
            {/* <p>{settings?.site_address} 2803, Control Tower, Motor City<br />Detroit Road, Dubai</p> */}
            <p className="mt-1">{settings?.site_email}</p>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-white">
<SocialMediaLinks settings={settings} />
          </div>

          <p className="text-xs mt-4">© Copyright {new Date().getFullYear()} Equifirst.<br />All Rights Reserved.</p>
        </div>

      </div>

      )}
      <div className="h-0 md:h-25"></div>
    </div>
  );
}
