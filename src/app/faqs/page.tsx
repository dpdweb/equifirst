'use client';

import React, { useEffect, useState } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import FaqList from '../components/FaqList';
import { fetchFaqCategories, fetchFaqsByCategory } from '../lib/api';

export default function FaqPage() {
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchFaqCategories();
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].id); // Auto-select first category
        }
      } catch (err) {
        setError(err.message);
      }
    }
    loadCategories();
  }, []);

  // Load FAQs when category/page changes
  useEffect(() => {
    if (!selectedCategory) return;

    async function loadFaqs() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchFaqsByCategory(selectedCategory, page);
        setFaqs(data.data);
        setTotalPages(data.last_page);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadFaqs();
  }, [selectedCategory, page]);

  return (
    <div className="ef-sub-page-top-style">
      <div className="flex">
      <CategorySidebar
        categories={categories}
        activeId={selectedCategory}
        onSelect={(id) => {
          setSelectedCategory(id);
          setPage(1);
        }}
      />

      {loading ? (
        <div className="pl-6 flex items-center justify-center">Loading FAQs...</div>
      ) : error ? (
        <div className="flex items-center justify-center text-red-500">{error}</div>
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
  );
}
