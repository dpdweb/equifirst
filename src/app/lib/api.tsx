const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://www.equifirst.ae/api';  // Default to production URL if not set

export { API_BASE_URL };

export async function fetchHeroSlides() {
  const res = await fetch(`${API_BASE_URL}/hero-sliders`);
  if (!res.ok) throw new Error('Failed to fetch slides');
  const json = await res.json();
  return { data: json.data };
}

export async function fetchSettings() {
  const res = await fetch(`${API_BASE_URL}/settings`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch settings');
  return res.json();
}

export async function fetchTeams() {
  const res = await fetch(`${API_BASE_URL}/teams`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch hero slides');
  return res.json();
}

export async function fetchFaqCategories() {
  const res = await fetch(`${API_BASE_URL}/categories`);
  if (!res.ok) throw new Error('Failed to fetch FAQ categories');
  return res.json();
}

export async function fetchFaqsByCategory(categoryId: string | number, page: number = 1) {
  const res = await fetch(`${API_BASE_URL}/faqs?category=${categoryId}&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return res.json();
}

export async function fetchBlogs() {
  const res = await fetch(`${API_BASE_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const json = await res.json();
  return json.data || [];
}

export async function fetchBlogBySlug(slug: string) {
  const res = await fetch(`${API_BASE_URL}/blogs/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch blog data');
  return res.json();
}

export async function incrementBlogView(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}/increment-view`, {
      method: 'POST',
    });
    if (!res.ok) console.error('Failed to increment blog view');
    return await res.json();
  } catch (error) {
    console.error('Error incrementing blog view:', error);
  }
}

export async function fetchTestimonials() {
  const res = await fetch(`${API_BASE_URL}/testimonials`);
  if (!res.ok) throw new Error('Failed to fetch testimonials');
  const result = await res.json();
  return result.data;
}
