import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

interface SSearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SSearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map((result) => (
        <ProductItem key={result.id} product={result} />
      ))}
    </div>
  );
}
