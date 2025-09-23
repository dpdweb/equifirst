import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SettingsProvider, Settings } from "./context/SettingsContext";
import { fetchSettings } from "./lib/api";
import GTMWrapper from "./GTMWrapper"; // ✅ import wrapper

export const metadata: Metadata = {
  title: "Equifirst",
  description: "Equifirst - Capital Financing",
  icons: {
    icon: [
      { url: "/assets/images/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/assets/images/favicon.png", type: "image/png", sizes: "16x16" },
      { url: "/assets/images/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/assets/images/favicon.png", sizes: "180x180" }],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings: Settings = await fetchSettings();

  return (
    <html lang="en">
      <head />
      <body>
        {/* ✅ GTM will only load if not /dashboard or /login */}
        <GTMWrapper />

        <SettingsProvider settings={settings}>
          <Header />
          {children}
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}
