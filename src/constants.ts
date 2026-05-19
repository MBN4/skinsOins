import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'luminous-silk-serum',
    name: 'Luminous Silk Serum',
    price: 125.00,
    description: 'A revolutionary bio-active serum that restores cellular vitality and radiance.',
    image: '/assets/luminous-silk-serum.png',
    details: 'Formulated with 2% Pure Hyaluronic Acid and Swiss Alpine Rose extracts. This serum penetrates deep into the dermis to provide 72-hour hydration and visible lifting effects.',
    category: 'Skincare'
  },
  {
    id: 'velvet-matte-elixir',
    name: 'Velvet Matte Elixir',
    price: 48.00,
    description: 'High-pigment liquid lip color with a weightless, air-whipped texture.',
    image: '/assets/velvet-matte-elixir.png',
    details: 'Enriched with cold-pressed Jojoba oil and Vitamin E. Provides a rich, saturated color that stays comfortable and smudge-proof for up to 16 hours. Paraben-free and vegan.',
    category: 'Makeup'
  },
  {
    id: 'ethereal-glow-foundation',
    name: 'Ethereal Glow Foundation',
    price: 85.00,
    description: 'A serum-infused foundation that blurs the line between skincare and makeup.',
    image: '/assets/ethereal-glow-foundation.png',
    details: 'Breathable, medium-buildable coverage with SPF 30 protection. Features light-diffusing technology to create a soft-focus effect that lasts from dawn to dusk.',
    category: 'Makeup'
  },
  {
    id: 'midnight-recovery-mask',
    name: 'Midnight Recovery Mask',
    price: 95.00,
    description: 'An overnight transformation treatment that repairs environmental damage.',
    image: '/assets/midnight-recovery-mask.png',
    details: 'Powered by rare Night-Blooming Jasmine and Peptides. This rich mask strengthens the skin barrier while you sleep, ensuring you wake up to a revitalized, smooth complexion.',
    category: 'Skincare'
  },
  {
    id: 'aurora-eye-palette',
    name: 'Aurora Eye Palette',
    price: 72.00,
    description: '12 celestial shades inspired by the Northern Lights.',
    image: '/assets/aurora-eye-palette.png',
    details: 'Cream-to-powder formula with ultra-fine shimmer and velvet mattes. Each shade is highly blendable and infused with crushed gemstones for a truly luminous finish.',
    category: 'Makeup'
  },
  {
    id: 'botanical-cleansing-balm',
    name: 'Botanical Cleansing Balm',
    price: 65.00,
    description: 'A melt-away balm that dissolves makeup and impurities while nourishing the skin.',
    image: '/assets/botanical-cleansing-balm.png',
    details: 'Transforms from a balm to a milk. Contains Moringa Seed oil and Rosehip to gently cleanse without stripping natural oils. Leaves skin feeling supple and refreshed.',
    category: 'Skincare'
  },
  {
    id: 'divine-body-oil',
    name: 'Divine Body Oil',
    price: 55.00,
    description: 'A silken body oil that nourishes and glows.',
    image: '/assets/divine-body-oil.png',
    details: 'Infused with 24k gold flakes and rare almond extracts.',
    category: 'Body Care'
  },
  {
    id: 'noir-essence-parfum',
    name: 'Noir Essence Parfum',
    price: 185.00,
    description: 'A deep, mysterious fragrance for the night.',
    image: '/assets/noir-essence-parfum.png',
    details: 'Notes of Oud, Bulgarian Rose, and Madagascan Vanilla.',
    category: 'Fragrance'
  },
  {
    id: 'silk-protein-shampoo',
    name: 'Silk Protein Shampoo',
    price: 42.00,
    description: 'Strengthens and revitalizes hair from root to tip.',
    image: '/assets/silk-protein-shampoo.png',
    details: 'Formulated with hydrolyzed silk and keratin.',
    category: 'Hair Care'
  },
  {
    id: 'luxury-spa-gift-set',
    name: 'Luxury Spa Gift Set',
    price: 250.00,
    description: 'The ultimate pampering experience in a box.',
    image: '/assets/luxury-spa-gift-set.png',
    details: 'Contains our best-sellers in full size.',
    category: 'Gift Sets'
  }
];

export const WHATSAPP_NUMBER = '923244904441';

export const CATEGORY_THEMES: Record<string, { title: string; subtitle: string; gradient: string; accent: string; blobColor: string }> = {
  'Skincare': {
    title: 'Botanical Purity',
    subtitle: "Nature's finest extracts for your skin.",
    gradient: 'from-white via-white to-accent-brand/20',
    accent: 'text-accent-brand',
    blobColor: 'bg-accent-brand/30'
  },
  'Makeup': {
    title: 'Artistic Expression',
    subtitle: 'Define your beauty with high-impact color.',
    gradient: 'from-white via-white to-accent-brand/20',
    accent: 'text-accent-brand',
    blobColor: 'bg-accent-brand/30'
  },
  'Body Care': {
    title: 'Full Body Radiance',
    subtitle: 'Nourish every inch of your being.',
    gradient: 'from-white via-white to-accent-brand/20',
    accent: 'text-accent-brand',
    blobColor: 'bg-accent-brand/30'
  },
  'Fragrance': {
    title: 'Scented Memories',
    subtitle: 'Leave a lasting impression.',
    gradient: 'from-white via-white to-accent-brand/20',
    accent: 'text-accent-brand',
    blobColor: 'bg-accent-brand/30'
  },
  'Hair Care': {
    title: 'Silk & Strength',
    subtitle: 'Professional care for your crown.',
    gradient: 'from-white via-white to-accent-brand/20',
    accent: 'text-accent-brand',
    blobColor: 'bg-accent-brand/30'
  },
  'Gift Sets': {
    title: 'Curated Gifting',
    subtitle: 'The perfect gesture of luxury.',
    gradient: 'from-white via-white to-accent-brand/20',
    accent: 'text-accent-brand',
    blobColor: 'bg-accent-brand/30'
  }
};

export const PRODUCT_PAGE_TABS = ['description', 'details', 'science'];
export const PRODUCT_PAGE_SCIENCE_TEXT = "Our laboratory leverages advanced molecular biology to ensure that every botanical extract is stabilized at its highest bio-active state. This technology ensures maximum efficacy and skin-compatibility.";
export const PRODUCT_PAGE_VALUE_PROPS = [
  { icon: 'Truck', text: "Complimentary Delivery" },
  { icon: 'ShieldCheck', text: "Authenticity Guaranteed" },
  { icon: 'RefreshCcw', text: "30-Day Returns" }
];
