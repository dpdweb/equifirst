import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SettingsProvider, Settings } from "./context/SettingsContext";
import { fetchSettings } from "./lib/api";

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
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-58FD5S55'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-58FD5S55');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58FD5S55"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* SettingsProvider is a client component but can be fed server data */}
        <SettingsProvider settings={settings}>
          <Header />
          {children}
          <Footer />
        </SettingsProvider>
      </body>
    </html>
  );
}

