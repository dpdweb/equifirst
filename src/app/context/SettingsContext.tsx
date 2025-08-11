// context/SettingsContext.tsx
'use client';
import { createContext, useContext } from 'react';

export interface Settings {
  site_logo_desktop: string;
  site_logo_mobile: string;
  site_logo_icon: string;
  site_favicon: string;
  site_name: string;
  site_title: string;
  admin_email: string;
  record_per_page: string;
  site_address: string;
  site_email: string;
  site_logo_white: string;
  site_white_logo: string;
  white_logo: string;
  footer_logo: string;
  _token: string;
  _method: string;
  social_media_setting: string;
  facebook_url?: string | null;
  x_url?: string | null;
  linkedin_url?: string | null;
  youtube_url?: string | null;
  instagram_url?: string | null;
}

const SettingsContext = createContext<Settings | null>(null);

export function SettingsProvider({ settings, children }: { settings: Settings; children: React.ReactNode }) {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx; // returns the settings object directly
}
