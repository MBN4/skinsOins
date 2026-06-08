import type { Metadata } from 'next';
import CategoryClient from '../../../components/CategoryClient';

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

// 1. We added this function to define which categories to build statically
export async function generateStaticParams() {
  // Replace these with your exact category names (use URL-friendly names)
  const categories = ['cleansers', 'serums', 'moisturizers', 'masks', 'all'];

  return categories.map((name) => ({
    categoryName: name,
  }));
}

export default function Page() {
  return <CategoryClient />;
}