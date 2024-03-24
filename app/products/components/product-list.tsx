'use client';
import { GridContainer } from '@/components/layout/grid';
import { Product } from '@/services/api/products';
import { ProductCard } from './product-card';

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <GridContainer
      items={products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => console.log('Add to cart', product.id)}
        />
      ))}
    />
  );
};
