'use client'; // For app router projects (Next.js 13+); remove for pages router

import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard'; // Create this component
import { fetchBlogs } from '../lib/api';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchBlogs(page);
        setBlogs(data.data);
        setTotalPages(data.last_page);
      } catch (err) {
        setError(err.message || 'Failed to load blogs.');
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, [page]);

  return (
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
  );
}
