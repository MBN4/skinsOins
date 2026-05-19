import type { Metadata } from 'next';
import ShopClient from '../../components/ShopClient';

export const metadata: Metadata = {
  title: 'Shop SkinsOins | The Ultimate Skincare & Makeup Collection',
  description: 'Explore the full SkinsOins collection of advanced serum-infused foundations, bio-active serums, recovery masks, and botanical body care formulations.',
};

export default function Page() {
  return <ShopClient />;
}
