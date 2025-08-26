'use client';

import Link from 'next/link';
import { useSettings, Settings } from "../context/SettingsContext";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

export default function SocialMediaSettings() {
  const settings: Settings = useSettings();

  return (
    <div className="flex gap-3">
      {settings.facebook_url && (
        <Link href={settings.facebook_url} target="_blank" rel="noopener noreferrer">
          <FacebookIcon size={20} />
        </Link>
      )}

      {settings.x_url && (
        <Link href={settings.x_url} target="_blank" rel="noopener noreferrer">
          <TwitterIcon size={20} />
        </Link>
      )}

      {settings.instagram_url && (
        <Link href={settings.instagram_url} target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={20} />
        </Link>
      )}

      {settings.linkedin_url && (
        <Link href={settings.linkedin_url} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon size={20} />
        </Link>
      )}

      {settings.youtube_url && (
        <Link href={settings.youtube_url} target="_blank" rel="noopener noreferrer">
          <YoutubeIcon size={20} />
        </Link>
      )}

      {settings.tiktok_url && (
        <Link href={settings.tiktok_url} target="_blank" rel="noopener noreferrer">
          <FaTiktok size={20} />
        </Link>
      )}
    </div>
  );
}
