"use client";

import { useMemo, useState } from "react";
import { PRODUCT_DATA } from "./productData";
import { useBrand } from "@/app/providers/BrandProvider";
import { brandTheme } from "@/lib/brandTheme";
import { SearchBar } from "./components/SearchBar";
import { ProductCard } from "./components/ProductCard";
import { ProductFilters } from "./components/ProductFilters";
import { MobileFilters } from "./components/MobileFilters";
import { Pagination } from "./components/Pagination";

const PER_PAGE = 6;

export default function ProductsPage() {
  const { brand } = useBrand();
  const theme = brandTheme[brand];
  const products = PRODUCT_DATA[brand];

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category ? p.category === category : true;
      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: theme.text }}
          >
            Our Products
          </h1>
          <p className="mt-2 text-sm max-w-xl" style={{ color: theme.muted }}>
            Explore our carefully curated range designed for performance,
            durability, and everyday use.
          </p>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        {/* Mobile filter button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden mt-4 w-full py-3 rounded-xl text-sm font-medium"
          style={{
            border: `1px solid ${theme.border}`,
            color: theme.text,
          }}
        >
          Filter Products
        </button>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8 mt-8">
          <aside className="hidden lg:block">
            <ProductFilters
              categories={categories}
              active={category}
              onChange={setCategory}
            />
          </aside>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {paginated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        <Pagination
          page={page}
          total={filtered.length / PER_PAGE}
          onChange={setPage}
        />
      </div>

      <MobileFilters
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        categories={categories}
        active={category}
        onChange={setCategory}
      />
    </div>
  );
}
