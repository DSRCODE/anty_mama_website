"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Brand = "ANTY_MAMA" | "NURSE_CAM";

type BrandContextType = {
  brand: Brand;
  setBrand: (brand: Brand) => void;
};

const BrandContext = createContext<BrandContextType | null>(null);

const BRAND_STORAGE_KEY = "selected_brand";

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [brand, setBrandState] = useState<Brand>("ANTY_MAMA");
  const [isHydrated, setIsHydrated] = useState(false);

  /* Load brand from localStorage on mount */
  useEffect(() => {
    const storedBrand = localStorage.getItem(BRAND_STORAGE_KEY);
    if (storedBrand === "ANTY_MAMA" || storedBrand === "NURSE_CAM") {
      setBrandState(storedBrand);
    }
    setIsHydrated(true);
  }, []);

  /* Save brand to localStorage */
  const setBrand = (newBrand: Brand) => {
    setBrandState(newBrand);
    localStorage.setItem(BRAND_STORAGE_KEY, newBrand);
  };

  /* Prevent hydration mismatch / theme flash */
  if (!isHydrated) return null;

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = (): BrandContextType => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
};
