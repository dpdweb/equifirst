'use client';
import { useEffect } from 'react';

// Extend the Window type
declare global {
  interface Window {
    myLandbot?: unknown;
    Landbot?: {
      Livechat: new (options: { configUrl: string }) => void;
    };
  }
}

export default function Landbot() {
  useEffect(() => {
    const initLandbot = () => {
      if (window.myLandbot) return;

      const script = document.createElement('script');
      script.type = 'module';
      script.async = true;
      script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

      script.addEventListener('load', () => {
        if (window.Landbot) {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl:
              'https://storage.googleapis.com/landbot.online/v3/H-2953778-680S6MTYPIAKOBMB/index.json',
          });
        }
      });

      document.head.appendChild(script);
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // invisible component
}
