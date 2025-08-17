import { slugify } from "@/lib/utils";

export interface Product {
  name: string;
  category: string;
  dosageForm: string;
  strength: string;
  packSize: string;
  mrp: string;
  keyBenefits: string[];
  images: string[];
  tags: string[];
  slug: string;
}

const rawProducts: Omit<Product, "slug">[] = [
  { name: "SUPERGEST-SR", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "SUPER-HB", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "FOLJOY", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "CLEAN-V7", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "CLEAN-V3", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "CYCLE-21", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "CYSTOPIL", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "ESOKARE-D", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "Z-ON", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "SNORIL-LX", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "SNORIL-D", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "SNORIL-COLD", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "VITOTOP", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "D3-NINE+", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "D3-NINE", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "ASTRACLAV", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "RIGHTCEF", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "SETMOL-MDS", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
  { name: "MEGAMONT-L", category: "", dosageForm: "", strength: "", packSize: "", mrp: "", keyBenefits: [], images: [], tags: [] },
];

export const products: Product[] = rawProducts.map(p => ({ ...p, slug: slugify(p.name) }));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
