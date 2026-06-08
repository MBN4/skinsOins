import type { Metadata } from 'next';
import ProductClient from '../../../components/ProductClient';
import { PRODUCTS } from '../../../constants';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) {
    return {
      title: 'Product Details | SkinsOins Luxury Skincare',
    };
  }
  return {
    title: `${product.name} | SkinsOins Luxury Skincare`,
    description: product.description || `Discover ${product.name} formulated with botanical intelligence and clinical precision by SkinsOins.`,
  };
}

// We added this function to automatically generate paths for all products
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id.toString(), // Ensuring the ID is a string
  }));
}

export default function Page() {
  return <ProductClient />;
}