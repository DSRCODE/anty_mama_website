"use-client";
import BrandHeroCarousel from "../landing/BrandHeroCarousel";
import CustomerCarousel from "../landing/CustomerCarousel";
import HeroCarousel from "../landing/HeroCarousel";
import ProductSection from "../landing/ProductSection";

export default function NurseHero() {
  return (
    <main>
      <BrandHeroCarousel />
      <ProductSection />

      <CustomerCarousel />
    </main>
  );
}
