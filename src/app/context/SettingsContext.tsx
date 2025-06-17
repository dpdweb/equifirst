// app/context/SettingsContext.tsx
'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Settings {
  site_logo_desktop: string;
  site_name: string;
  // add more fields as needed
}

interface SettingsContextType {
  settings: Settings | null;
  loading: boolean;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: null,
  loading: true,
});



export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/settings`, { cache: 'no-store' });
        const data = await res.json();
        setSettings(data);
      } catch (err) {
        console.error('Failed to fetch settings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
