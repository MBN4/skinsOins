import type { Metadata } from 'next';
import CategoryClient from '../../../components/CategoryClient';
import { PRODUCTS } from '../../../constants';

interface Props {
  params: Promise<{
    categoryName: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryName } = await params;
  const decodedName = decodeURIComponent(categoryName);
  return {
    title: `${decodedName} Collection | SkinsOins Luxury Skincare`,
    description: `Discover the premium SkinsOins ${decodedName} collection, formulated with botanical intelligence and clinical precision to restore cellular vitality and beautiful radiance.`,
  };
}

// Pre-render a page for each real product category.
export async function generateStaticParams() {
  const categories = Array.from(new Set(PRODUCTS.map((product) => product.category)));

  return categories.map((name) => ({
    categoryName: name,
  }));
}

export default function Page() {
  return <CategoryClient />;
}