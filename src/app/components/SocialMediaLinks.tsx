// 'use client';
// import Link from 'next/link';
// import {
//   FacebookIcon,
//   TwitterIcon,
//   InstagramIcon,
//   LinkedinIcon,
//   YoutubeIcon,
// } from 'lucide-react';

// // ✅ Define the type for settings
// interface SocialMediaLinksProps {
//   settings: {
//     facebook_url?: string;
//     x_url?: string; // or twitter_url if you're using that instead
//     instagram?: string;
//     linkedin_url?: string;
//     youtube_url?: string;
//   };
// }

// export default function SocialMediaLinks({ settings }: SocialMediaLinksProps) {
//   return (
//     <div className="flex gap-3">
//       {settings?.facebook_url && (
//         <Link href={settings.facebook_url} target="_blank" rel="noopener noreferrer">
//           <FacebookIcon size={20} />
//         </Link>
//       )}
//       {settings?.x_url && (
//         <Link href={settings.x_url} target="_blank" rel="noopener noreferrer">
//           <TwitterIcon size={20} />
//         </Link>
//       )}
//       {settings?.instagram && (
//         <Link href={settings.instagram} target="_blank" rel="noopener noreferrer">
//           <InstagramIcon size={20} />
//         </Link>
//       )}
//       {settings?.linkedin_url && (
//         <Link href={settings.linkedin_url} target="_blank" rel="noopener noreferrer">
//           <LinkedinIcon size={20} />
//         </Link>
//       )}
//       {settings?.youtube_url && (
//         <Link href={settings.youtube_url} target="_blank" rel="noopener noreferrer">
//           <YoutubeIcon size={20} />
//         </Link>
//       )}
//     </div>
//   );
// }
