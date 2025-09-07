'use client'
// import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../lib/api";
import SubPageHeroBanner from "../components/SubPageHeroBanner";
import BlogCard from "../components/BlogCard";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  image?: string;
  views?: number;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div>
      <div className="ef-sub-page-top-style">
        <SubPageHeroBanner
          title="Blog"
          subtitle="Insights To Guide You"
          image="/assets/images/blog-hero.jpg"
        />
      </div>
    <div className="ef-sub-page-top-style">
      <div className="grid p-2  md:gap-6 lg:grid-cols-3 my-10">
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={{
                id: blog.id,
                title: blog.title,
                slug: blog.slug,
                image: blog.image,
                date: blog.date
                  ? blog.date
                  : undefined,
                views: blog.views
              }}
            />
          ))
        )}
      </div>
      </div>
    </div>
  );
}
