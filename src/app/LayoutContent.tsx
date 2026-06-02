"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

//   const landingPages = ["/landing", "/landing-page"];
  

//   const isLandingPage = landingPages.includes(pathname);

  const isLandingPage =
  pathname.startsWith("/landing") ||
  pathname.startsWith("/landing-page");

  return (
    <>
      {!isLandingPage && <Header />}

      {children}

      {!isLandingPage && <Footer />}
    </>
  );
}