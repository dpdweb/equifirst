'use client';
import { useEffect } from 'react';

export default function Landbot() {
  useEffect(() => {
    const initLandbot = () => {
      if (window.myLandbot) return;

      const script = document.createElement('script');
      script.type = 'module';
      script.async = true;
      script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

      script.addEventListener('load', () => {
        window.myLandbot = new window.Landbot.Livechat({
          configUrl:
            'https://storage.googleapis.com/landbot.online/v3/H-2953778-680S6MTYPIAKOBMB/index.json',
        });
      });

      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // It's an invisible widget
}
