import { ProductItem } from './ProductItem';

interface SSearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function SearchResults({ results }: SSearchResultsProps) {
  return (
    <div>
      {results.map((result) => (
        <ProductItem key={result.id} product={result} />
      ))}
    </div>
  );
}
