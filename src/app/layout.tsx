import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SettingsProvider, Settings } from "./context/SettingsContext";
import { fetchSettings } from "./lib/api";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Equifirst",
  description: "Equifirst - Capital Financing",
  icons: {
    icon: [
      { url: '/assets/images/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/assets/images/favicon.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/images/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/assets/images/favicon.png' }],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings: Settings = await fetchSettings();
  const cookieStore = await cookies();
  const hasReviewAccess = cookieStore.has("review_access");


  return (
    <html lang="en">
      <body>
        {/* SettingsProvider is a client component but can be fed server data */}
        <SettingsProvider settings={settings}>
          <Header />
          {/* {hasReviewAccess && <Header />} */}
          {children}
          <Footer />
          {/* {hasReviewAccess && <Footer />} */}
        </SettingsProvider>
      </body>
    </html>
  );
}
