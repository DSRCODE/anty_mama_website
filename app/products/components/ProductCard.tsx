import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";
import Image from "next/image";
import { brandTheme } from "@/lib/brandTheme";
import { useBrand } from "@/app/providers/BrandProvider";
import { useCart } from "@/app/providers/CartProvider";

export function ProductCard({ product }: any) {
  const { addToCart, items } = useCart();
  const { brand } = useBrand();
  const theme = brandTheme[brand];

  const alreadyAdded = items.some((i: any) => i.id === product.id);

  return (
    <div
      className="rounded-xl overflow-hidden transition hover:shadow-md"
      style={{ border: `1px solid ${theme.border}` }}
    >
      <Link
        href={`/products/${product.id}`}
        className="block relative aspect-[4/5] bg-gray-100"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </Link>

      <div className="p-3 space-y-2">
        <Link href={`/products/${product.id}`}>
          <h3
            className="text-sm font-medium leading-snug line-clamp-2 hover:underline"
            style={{ color: theme.text }}
          >
            {product.name}
          </h3>
        </Link>

        <p className="text-base font-semibold" style={{ color: theme.primary }}>
          ₹{product.price}
        </p>

        <AddToCartButton
          color={theme.primary}
          textColor={theme.subtext}
          onAdd={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              brand,
            })
          }
          alreadyAdded={alreadyAdded}
        />
      </div>
    </div>
  );
}
