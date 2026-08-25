import { PRODUCTS } from "../../../constants";
import ProductClient from "../../../components/ProductClient";

export default function ProductPage() {
  return <ProductClient />;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}