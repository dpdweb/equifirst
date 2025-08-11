"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogBySlug } from "../../lib/api"; // adjust path if needed

interface BlogDetail {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at?: string;
}

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetchBlogBySlug(slug)
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <Link href="/blog">← Back to Blog List</Link>
      <h1>{blog.title}</h1>
      {blog.created_at && <p><em>{blog.created_at}</em></p>}
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
