'use client';
import Image from 'next/image';
import Link from 'next/link';

type Blog = {
  id: number;
  title: string;
  slug: string;
  image?: string;
  date?: string;
  views?: number;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="block">

    <div className=" bg-white rounded-lg overflow-hidden">
      <Image
        src={blog.image || '/assets/images/fallback.jpg'}
        alt={blog.title}
        width={500}
        height={300}
        className="w-full h-52 object-cover rounded-2xl"
      />
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm mb-2 space-x-3">
          <span>{blog.date}</span>
          <span className="flex items-center space-x-1">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3C5.5 3 2 10 2 10s3.5 7 8 7 8-7 8-7-3.5-7-8-7zm0 11a4 4 0 110-8 4 4 0 010 8z" />
            </svg>
            <span>{blog.views ?? 357}</span>
          </span>
        </div>
        <h3 className="text-xl font-semibold text-sky-700 leading-snug">
          {blog.title}
        </h3>
      </div>
    </div>
    </Link>
  );
}
