import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Hedling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import type { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios from 'axios';

export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);

  const getMenu = async () => {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles['head']}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюда или состав" />
      </div>
      <div className="">
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
    </>
  );
}
