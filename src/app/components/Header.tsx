'use client';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
// import { useSettings } from '../context/SettingsContext';



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  // const { settings, loading } = useSettings();


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
    <header
      className={`sticky top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-[rgba(255,255,255,0.8)] shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Image
            src={settings?.site_logo_desktop || "/default-logo.png"}
            alt="Logo"
            width={200}
            height={100}
            className="h-auto w-auto"
            priority
          /> */}
          <Image
            src='/assets/images/logo.png'
            alt="Logo"
            width={200}
            height={100}
            className="h-auto w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex gap-6 text-ef-gray font-medium">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/" className="nav-link">Mortgage Calculator</Link>
          <Link href="/" className="nav-link">Services</Link>
          <Link href="/" className="nav-link">Blogs</Link>
          <Link href="/" className="nav-link">About us</Link>
          {/* <Link href="/mortgage-calculator" className="nav-link">Mortgage Calculator</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blogs" className="nav-link">Blogs</Link>
          <Link href="/about-us" className="nav-link">About us</Link> */}
        </nav>

        <div className="md:hidden pt-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-ef-gray">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:block">
          <button className="btn">Contact Us</button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 sm:px-6 lg:px-8 py-4 space-y-3 text-ef-gray font-medium bg-white z-40 shadow-md">
          <Link href="/" className="block nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          {/* <Link href="/mortgage-calculator" className="block nav-link" onClick={() => setIsOpen(false)}>Mortgage Calculator</Link>
          <Link href="/services" className="block nav-link" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/blogs" className="block nav-link" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/about-us" className="block nav-link" onClick={() => setIsOpen(false)}>About us</Link>
          <button className="btn w-full mt-4" onClick={() => setIsOpen(false)}>Contact Us</button> */}
        </div>
      )}
    </header>
  );
}
