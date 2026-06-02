import type { Metadata } from "next";
import "./globals.css";
import LayoutContent from "./LayoutContent";
import { SettingsProvider, Settings } from "./context/SettingsContext";
import { fetchSettings } from "./lib/api";
import Script from "next/script"; // ✅ import Script
import GTMWrapper from "./GTMWrapper";

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
      <head>
        {/* ✅ Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11226423965"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11226423965');
              gtag('config', 'G-H0ZK1HWCP9');
              gtag('config', 'G-PVXQTRW0SP');
            `,
          }}
        />
        
      </head>
      <body>
        {/* ✅ GTM still works for marketing pages */}
        <GTMWrapper />

<SettingsProvider settings={settings}>
  <LayoutContent>
    {children}
  </LayoutContent>
</SettingsProvider>
      </body>
    </html>
  );
}
