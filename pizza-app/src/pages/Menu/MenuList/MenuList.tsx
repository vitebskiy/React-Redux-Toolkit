import ProductCard from '../../../components/ProductCard/ProductCard';
import type { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

export function MenuList({ products }: MenuListProps) {
  return (
    <div className={(styles['wrapper'])}>
      {products.map((product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          description={product.ingredients.join(', ')}
          rating={product.rating}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
