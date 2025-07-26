// components/BlogCard.js
'use client';
import Image from 'next/image';
import { Eye } from 'lucide-react';
export default function BlogCard({ blog }) {
  return (
    <div>
    {/* <div className="rounded-xl overflow-hidden shadow-md w-full max-w-sm">
      <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <p className="text-gray-500 text-sm flex items-center justify-between">
          {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })} 
          <span className="flex items-center gap-1">
            👁️ {blog.views}
          </span>
        </p>
        <h3 className="mt-2 text-xl font-bold text-ef-blue">
          {blog.title.length > 35 ? blog.title.substring(0, 35) + '...' : blog.title}
        </h3>
      </div>
    </div> */}


        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden border">
      <div className="relative h-60 w-full">
        <Image
          src={ blog.image }
          alt="UAE Mortgage"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center text-gray-500 text-sm space-x-4 mb-2">
          <span>June 01, 2025</span>
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" /> 357
          </span>
        </div>

        <h2 className="text-xl font-semibold text-sky-800 leading-snug">
          {blog.title.length > 35 ? blog.title.substring(0, 35) + '...' : blog.title}
        </h2>
      </div>
    </div>
    </div>
  );
}



