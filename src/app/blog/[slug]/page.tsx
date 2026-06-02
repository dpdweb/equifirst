"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import Link from "next/link";
import { fetchBlogBySlug, incrementBlogView } from "../../lib/api"; // import your increment function
import BlogDetail from "../../components/BlogDetail";

interface Author {
  image: string;
  name: string;
  role: string;
  description: string;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  date: string;
  author: Author;
  created_at?: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetchBlogBySlug(slug)
      .then((data) => {
        setBlog(data);

        // ✅ Increment view count after blog is successfully fetched
        incrementBlogView(slug).catch((err) =>
          console.error("Error incrementing view count:", err)
        );
      })
      .catch((err) => console.error("Error fetching blog:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p></p>;
  if (!blog) return <p></p>;

  return (
    <div>
      <BlogDetail blog={blog} />
    </div>
  );
}
