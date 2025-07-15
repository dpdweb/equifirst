'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchTeams } from '../lib/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
}

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  async function loadTeams() {
    try {
      const data = await fetchTeams();
      console.log('API data:', data);

      setTeamMembers(data.team || data.data || []);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }

  loadTeams();
}, []);


  if (loading) return <div className="text-center p-10">Loading slides...</div>;
  if (error) return <div className="text-center text-red-500 p-10">{error}</div>;

  return (
    <section className="ef-section-style">
      <div className="hidden md:grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Intro Box */}
        <div className="rounded-xl text-center md:text-left md:bg-ef-dark-blue-2 text-white pt-20 px-6">
          <h1 className="text-3xl font-bold text-ef-blue mb-4">Our Team</h1>
          <p className="text-stone-500">
            Contact us today to learn more about our mortgage solutions and how we can help you secure the best rates and terms available in the UAE.
          </p>
        </div>

        {/* Team Cards */}
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden rounded-xl bg-white"
          >
            {/* Team Image */}
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="object-cover w-full h-100"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-ef-blue bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-white">
              <p className="text-sm">{member.description}</p>
            </div>

            {/* Name & Title */}
            <div className="py-4 pl-4">
              <h3 className="text-lg font-semibold text-ef-blue">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="block md:hidden relative w-full max-w-4xl mx-auto mt-10">
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
          {teamMembers.map((member, index) => (
            <SwiperSlide key={member.id}>
              <div className="p-6 rounded-lg max-w-5xl mx-auto">


                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-100 rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold text-ef-dark-blue leading-snug">{member.name}</h2>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}
