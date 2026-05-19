export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '#', 
    children: [
      { label: 'Skincare', href: '/category/Skincare' },
      { label: 'Makeup', href: '/category/Makeup' },
      { label: 'Body Care', href: '/category/Body Care' },
      { label: 'Fragrance', href: '/category/Fragrance' },
      { label: 'Hair Care', href: '/category/Hair Care' },
      { label: 'Gift Sets', href: '/category/Gift Sets' }
    ]
  },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' }
];
