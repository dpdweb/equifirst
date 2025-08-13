'use client';
// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SubPageHeroBanner from "../components/SubPageHeroBanner";

interface Author {
  image: string;
  name: string;
  role: string;
  description: string;
}

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  author: Author;
}

export default function BlogDetail({ blog }: { blog: Blog }) {
  // const pathname = usePathname();
  // const [currentUrl, setCurrentUrl] = useState('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setCurrentUrl(window.location.origin + pathname);
  //   }
  // }, [pathname]);

  return (
    <div>
      <div className="ef-sub-page-top-style">
            <SubPageHeroBanner
              title="Blog"
              subtitle={blog.title}
              image={blog.image}
            />
            </div>


      {/* Blog Content */}
      <div className="min-h-screen bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <aside className="space-y-8">
            <div className="border-b pb-6">
              <h4 className="text-lg font-semibold mb-4">Details</h4>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">DATE</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>

            <div className="border-b pb-6">
              <h4 className="text-lg font-semibold mb-4">Author</h4>
              <div className="flex items-center space-x-4">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{blog.author.name}</p>
                  <p className="text-sm text-gray-600">{blog.author.role}</p>
                </div>
              </div>
              <p className="text-sm mt-3 text-gray-500 leading-snug">
                {blog.author.description}
              </p>
            </div>

            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Share</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <a
                    href={`https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span>📸</span> Instagram
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span>📘</span> Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span>🔗</span> Linkedin
                  </a>
                </li>
              </ul>
            </div> */}

          </aside>
        </div>
      </div>
    </div>
  );
}
