// lib/api.ts
let API_BASE_URL = '';

if (typeof window !== 'undefined') {
  const origin = window.location.origin;

  if (origin === 'http://82.25.105.217:3000') {
    API_BASE_URL = 'http://82.25.105.217/api'; // Live API
  } else {
    API_BASE_URL = 'http://localhost/equifirst_backend/public/api'; // Local API
  }
}

export { API_BASE_URL };

export async function fetchHeroSlides() {
  const res = await fetch(`${API_BASE_URL}/hero-sliders`);
  if (!res.ok) {
    throw new Error('Failed to fetch slides');
  }

  const json = await res.json();
  return { data: json.data }; // Adjust based on your actual API response structure
}


export async function fetchSettings() {
  const res = await fetch(`http://localhost/equifirst_backend/public/api/settings`, {
    cache: 'force-cache' // optional, ensures fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch settings');
  }

  return res.json();
}

export async function fetchTeams() {
  const res = await fetch(`${API_BASE_URL}/teams`, {
    cache: 'no-store' // optional, ensures fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch hero slides');
  }

  return res.json();
}



export async function fetchFaqCategories() {
  const res = await fetch(`${API_BASE_URL}/categories`);
  if (!res.ok) throw new Error('Failed to fetch FAQ categories');
  return await res.json();
}


export async function fetchFaqsByCategory(categoryId: string | number, page: number = 1) {
  const res = await fetch(`${API_BASE_URL}/faqs?category=${categoryId}&page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch FAQs');
  return await res.json();
}

// export async function fetchBlogs() {
//   const res = await fetch(`${API_BASE_URL}/blogs`);
//   if (!res.ok) throw new Error('Failed to fetch');
//   return res.json();
  
// }
export async function fetchBlogs() {
  const res = await fetch(`http://localhost/equifirst_backend/public/api/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  
  const json = await res.json();
  
  // If Laravel wraps blogs inside `data`, return only that
  return json.data || [];
}


// lib/api.ts

export async function fetchBlogBySlug(slug: string) {
  const res = await fetch(`http://localhost/equifirst_backend/public/api/blogs/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch blog data');
  return res.json();
}

// lib/api/blog.ts

export async function incrementBlogView(slug: string) {
  try {
    const res = await fetch(`http://localhost/equifirst_backend/public/api/blogs/${slug}/increment-view`, {
      method: 'POST',
    });

    if (!res.ok) {
      console.error('Failed to increment blog view');
    }

    return await res.json();
  } catch (error) {
    console.error('Error incrementing blog view:', error);
  }
}



// export async function fetchTestimonials() {
//   const res = await fetch(`${API_BASE_URL}/testimonials`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch testimonials');
//   }
//   return res.json();
// }


export async function fetchTestimonials() {
  const res = await fetch(`${API_BASE_URL}/testimonials`);
  if (!res.ok) {
    throw new Error('Failed to fetch testimonials');
  }

  const result = await res.json();
  return result.data; // ✅ return only the array
}


