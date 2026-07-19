import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
  return (
    <>
      <Link to={`/product/${props.id}`} className={styles['link']}>
        <div className={styles['card']} style={{ backgroundImage: `url('${props.image}')` }}>
          <div className={styles['head']}>
            <div className={styles['price']}>
              {props.price}&nbsp;
              <span className={styles['currency']}>₽</span>
            </div>
            <button className={styles['add-to-card']}>
              <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
            </button>
            <div className={styles['rating']}>
              {props.rating}&nbsp;
              <img src="/star-icon.svg" alt="Иконка звезды" />
            </div>
          </div>
        </div>
        <div className={styles['footer']}>
          <h3 className={styles['title']}>{props.name}</h3>
          <p className={styles['description']}>{props.description}</p>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
