export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  details: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
