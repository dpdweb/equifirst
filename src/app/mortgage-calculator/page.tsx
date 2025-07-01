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
    <div style={{ padding: '2rem' }}>
      <h1>YouTube Video Examples in Next.js</h1>



      {/* 2. Plain iframe */}
      <section style={{ marginTop: '3rem' }}>
        <h2>2. Plain iframe Embed</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mzi2le-eymg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>



      {/* 4. Manual play using postMessage */}
      <section style={{ marginTop: '3rem' }}>
        <h2>4. Manual Play (iframe + postMessage)</h2>
        <button
          onClick={handlePlayIframe}
          style={{ padding: '10px 20px', background: '#1d4ed8', color: '#fff', border: 'none', borderRadius: 4 }}
        >
          ▶ Play Video
        </button>
        <br />
        <iframe
          ref={iframeRef}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mzi2le-eymg?enablejsapi=1"
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ marginTop: '1rem' }}
        />
      </section>

      {/* 5. Custom thumbnail with play button */}
      <section style={{ marginTop: '3rem' }}>
        <h2>5. Thumbnail with Play Button</h2>
        {playCustom ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mzi2le-eymg?autoplay=1"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div onClick={() => setPlayCustom(true)} style={{ cursor: 'pointer', position: 'relative', width: 560 }}>
            <img
              src="https://img.youtube.com/vi/Mzi2le-eymg/hqdefault.jpg"
              alt="Custom thumbnail"
              width="560"
              height="315"
            />
            <div
              style={{
                position: 'absolute',
                top: '40%',
                left: '45%',
                fontSize: '2rem',
                background: '#0008',
                padding: '10px 15px',
                borderRadius: '50%',
                color: '#fff',
              }}
            >
              ▶
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
