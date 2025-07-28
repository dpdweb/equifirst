'use client';
import Image from 'next/image';
import { Eye } from 'lucide-react';

type Blog = {
  id: number;
  title: string;
  image?: string;
  date?: string;
  views?: number;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
      <div className="relative h-60 w-full">
        <Image
  src={blog.image || '/fallback.jpg'}
  alt={blog.title}
  layout="fill"
  objectFit="cover"
/>
      </div>

      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm space-x-4 mb-2">
          <span>June 01, 2025</span>
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" /> {blog.views ?? 357}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-sky-800 leading-snug">
          {blog.title.length > 35 ? blog.title.substring(0, 35) + '...' : blog.title}
        </h2>
      </div>
    </div>
  );
}
