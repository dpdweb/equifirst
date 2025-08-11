'use client';

import React, { useEffect, useState } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import FaqList from '../components/FaqList';
import { fetchFaqCategories, fetchFaqsByCategory } from '../lib/api';
import SubPageHeaderSpacer from '../components/SubPageHeaderSpacer';

// Types
interface FaqCategory {
  id: string | number;
  name: string;
}

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqResponse {
  data: Faq[];
  current_page: number;
  last_page: number;
}

export default function FaqPage() {
  const [categories, setCategories] = useState<FaqCategory[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | number>(''); // ✅ no null
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchFaqCategories();
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].id); // ✅ sets a valid ID
        }
      } catch {
        setError('Failed to load categories');
      }
    }
    loadCategories();
  }, []);

  // Load FAQs when category or page changes
  useEffect(() => {
    if (!selectedCategory) return;

    async function loadFaqs() {
      setLoading(true);
      setError(null);
      try {
        const data: FaqResponse = await fetchFaqsByCategory(selectedCategory, page);
        setFaqs(data.data);
        setTotalPages(data.last_page);
      } catch {
        setError('Failed to load FAQs');
      } finally {
        setLoading(false);
      }
    }

    loadFaqs();
  }, [selectedCategory, page]);

  return (
    <div>
      <SubPageHeaderSpacer />
    
    <div className="ef-sub-page-top-style">
      <div className="md:flex mb-20 mt-10 md:mt-0">
        <CategorySidebar
          categories={categories}
          activeId={selectedCategory}
          onSelect={(id: string | number) => {
            setSelectedCategory(id);
            setPage(1); // reset page on category change
          }}
        />

        <div className="flex-1 md:pl-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">Loading FAQs...</div>
          ) : error ? (
            <div className="flex items-center justify-center text-red-500 h-full">{error}</div>
          ) : (
            <FaqList
              faqs={faqs}
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
