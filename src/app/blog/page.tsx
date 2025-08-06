'use client';

import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { fetchBlogs } from '../lib/api';
import SubPageHeroBanner from "../components/SubPageHeroBanner";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  // Add other fields your BlogCard component needs
};

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchBlogs(); // Assuming you pass `page` to fetchBlogs
        setBlogs(data.data);
        setTotalPages(data.last_page);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to load blogs.');
        }
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, [page]);

  return (
    <div>
      <div className="ef-sub-page-top-style">
            {/* <MortgageCalculator /> */}
            <SubPageHeroBanner
              title="Blogs"
              subtitle="Welcome to Equifirst Blogs"
              image="/assets/images/blog-hero.jpg"
            />
            </div>
    
    <div className="ef-sub-page-top-style">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading && !error && blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="flex justify-between mt-8">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
    </div>
  );
}
