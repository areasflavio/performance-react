import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((result) => (
        <ProductItem
          key={result.id}
          product={result}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}
