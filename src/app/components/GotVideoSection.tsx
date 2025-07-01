'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const videos = [
  {
    id: 1,
    thumbnail: '/assets/images/video-thumbnail.png',
    title: 'How lorem ipsum?',
    description: 'Lorem ipsum dolor sit amet...',
    url: 'https://www.youtube.com/watch?v=VHdi_cSNMko',
  },
  {
    id: 2,
    thumbnail: '/assets/images/video-thumbnail.png',
    title: 'What lorem ipsum?',
    description: 'Lorem ipsum dolor sit amet...',
    url: 'https://www.youtube.com/watch?v=VHdi_cSNMko',
  },
  {
    id: 3,
    thumbnail: '/assets/images/video-thumbnail.png',
    title: 'Where lorem ipsum?',
    description: 'Lorem ipsum dolor sit amet...',
    url: 'https://www.youtube.com/watch?v=VHdi_cSNMko',
  },
]

function getEmbedUrl(url: string, autoplay = false) {
  const videoId = url.split('v=')[1]?.split('&')[0] || ''
  return `https://www.youtube.com/embed/${videoId}?rel=0${autoplay ? '&autoplay=1' : ''}`
}

export default function GotVideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<null | typeof videos[0]>(null)
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  const handleClose = () => {
    setIsPlayerReady(false)
    setTimeout(() => setSelectedVideo(null), 200)
  }

  useEffect(() => {
    if (selectedVideo) {
      const timer = setTimeout(() => setIsPlayerReady(true), 150)
      return () => clearTimeout(timer)
    }
  }, [selectedVideo])

  return (
    <div className="container mx-auto px-4 py-8">
        
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer transition hover:scale-105"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={640}
                height={360}
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-bold text-cyan-800">{video.title}</h3>
            <p className="text-gray-500">{video.description}</p>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
  modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          allowTouchMove={typeof window !== 'undefined' && window.innerWidth < 768}
          className="equi-swiper"
>
  {videos.map((video) => (
    <SwiperSlide key={video.id}>
      <div
        className="cursor-pointer transition hover:scale-105 p-6"
        onClick={() => setSelectedVideo(video)}
      >
        <div className="relative">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={640}
            height={360}
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-cyan-800">{video.title}</h3>
        <p className="text-gray-500">{video.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>

      <Dialog open={!!selectedVideo} onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 z-10 text-white hover:text-red-400"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedVideo?.url && (
              <div className="relative pt-[56.25%]">
                <iframe
                  src={getEmbedUrl(selectedVideo.url, isPlayerReady)}
                  title={selectedVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
