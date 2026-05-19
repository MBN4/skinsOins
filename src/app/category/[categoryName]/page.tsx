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

export default function Page() {
  return <CategoryClient />;
}