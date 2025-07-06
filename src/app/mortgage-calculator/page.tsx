'use client';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load react-player for dynamic import
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function YouTubeExamples() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playCustom, setPlayCustom] = useState(false);

  const handlePlayIframe = () => {
    iframeRef.current?.contentWindow?.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-center px-4 bg-white dark:bg-black text-black dark:text-white">
  <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
    Coming Soon
  </h1>
</div>
  );
}
