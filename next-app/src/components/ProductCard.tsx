import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="rounded-2xl border bg-white p-4 shadow hover:shadow-md flex flex-col items-center text-center"
    >
      <div className="h-24 w-full bg-neutral-200 mb-2" />
      <h3 className="font-semibold">{product.name}</h3>
      {product.strength && <p className="text-sm">{product.strength}</p>}
    </Link>
  );
}

export default ProductCard;
