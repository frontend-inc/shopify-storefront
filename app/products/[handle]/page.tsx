import ProductDetail from '@/components/shopify/product-detail';
import ProductRecommendations from '@/components/shopify/product-recommendations';

export default function Page() {
  return (
    <>
      <ProductDetail addToCartLabel="Add to Cart" />
      <ProductRecommendations title="You May Also Like" />
    </>
  );
}
