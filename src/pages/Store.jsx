import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import styles from './Store.module.css';

const CATS = [
  { id: 'all',         label: 'All Notes' },
  { id: 'programming', label: 'Programming' },
  { id: 'science',     label: 'Science' },
  { id: 'math',        label: 'Mathematics' },
  { id: 'commerce',    label: 'Commerce' },
];

export default function Store() {
  const [cat, setCat]     = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const searchParam = new URLSearchParams(window.location.search).get('cat');
  const [activeCat, setActiveCat] = useState(searchParam || 'all');

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCat === 'all' || p.category === activeCat;
      const matchQ   = !query || p.title.toLowerCase().includes(query.toLowerCase())
                               || p.tags?.some(t => t.toLowerCase().includes(query.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [activeCat, query]);

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <header className={styles.header}>
        <div className="container">
          <ScrollReveal>
            <p className={styles.headerLabel}>Digital Store</p>
            <h1 className={styles.headerTitle}>All Premium Notes</h1>
            <p className={styles.headerSub}>
              Handcrafted study material for every subject — ready to download in seconds.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <div className="container">
        {/* Filters */}
        <div className={styles.filters}>
          {/* Category Tabs */}
          <div className={styles.catTabs}>
            {CATS.map(({ id, label }) => (
              <button
                key={id}
                className={`${styles.catTab} ${activeCat === id ? styles.active : ''}`}
                onClick={() => setActiveCat(id)}
              >
                {label}
                {id !== 'all' && (
                  <span className={styles.catCount}>
                    {PRODUCTS.filter(p => p.category === id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className={styles.searchWrap}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search notes..."
              className={styles.searchInput}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className={styles.clearSearch} onClick={() => setQuery('')}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className={styles.resultsBar}>
          <span className={styles.resultsCount}>
            {filtered.length} {filtered.length === 1 ? 'note' : 'notes'} found
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} onBuyNow={setSelected} />
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyIcon}>📭</p>
            <p className={styles.emptyText}>No notes match your search.</p>
            <button className={styles.emptyReset} onClick={() => { setQuery(''); setActiveCat('all'); }}>
              Clear filters
            </button>
          </div>
        )}
      </div>

      {selected && <CheckoutModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
