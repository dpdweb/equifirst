'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" px-6s py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2">
   
        <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={100}
              />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-ef-gray font-medium">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/calculator" className="nav-link">Mortgage Calculator</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/blogs" className="nav-link">Blogs</Link>
          <Link href="/about" className="nav-link">About us</Link>
        </nav>

        <button className="btn">Contact Us</button>

      </div>
    </header>
  );
}
