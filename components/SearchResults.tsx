import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SSearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishlist,
}: SSearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

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
