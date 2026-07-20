import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
  const loaderData = useLoaderData() as { data: Promise<Product> };

  return (
    <>
      <Suspense fallback={'Загружа...'}>
        <Await resolve={loaderData.data}>{(product: Product) => <>Product — {product.name}</>}</Await>
      </Suspense>
    </>
  );
}
