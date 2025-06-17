// lib/api.ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchHeroSlides() {
  const res = await fetch(`${API_BASE_URL}/hero-sliders`);
  if (!res.ok) {
    throw new Error('Failed to fetch slides');
  }

  const json = await res.json();
  return { data: json.data }; // Adjust based on your actual API response structure
}


export async function fetchSettings() {
  const res = await fetch(`${API_BASE_URL}/settings`, {
    cache: 'no-store' // optional, ensures fresh data
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


