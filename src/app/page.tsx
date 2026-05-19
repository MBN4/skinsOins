import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient';

export const metadata: Metadata = {
  title: 'SkinsOins | Luxury Botanical Skincare & Clinical Cosmetics',
  description: 'Discover SkinsOins, a premier collection of botanical intelligence and clinical precision skincare and makeup formulations designed to restore radiance and cellular vitality.',
};

export default function Page() {
  return <HomeClient />;
}