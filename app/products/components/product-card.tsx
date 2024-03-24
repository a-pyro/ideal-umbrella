'use client';
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
    <>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={onAddToCart}>Add to cart</button>
    </>
  );
};
