'use client';
import { GridItem, UButton } from '@/components';
import { Product } from '@/services/api/products';
import Image from 'next/image';

export const ProductCard = ({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: () => void;
}) => {
  return (
    <GridItem xs={12} sm={6} md={4} width={100}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Rating: {product.rating}</p>
      <UButton onClick={onAddToCart}>Add to cart</UButton>
    </GridItem>
  );
};
