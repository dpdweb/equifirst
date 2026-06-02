// components/MetaHead.tsx
'use client';
import { useSettings } from '../context/SettingsContext';
import Head from 'next/head';

export default function MetaHead() {
  const settings = useSettings();


  return (
    <Head>
      <title>{settings?.site_name || 'Default Title'}</title>
      {/* <meta name="description" content={settings?.meta_description || 'Default description'} /> */}
    </Head>
  );
}
