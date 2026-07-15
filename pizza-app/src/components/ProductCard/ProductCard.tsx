import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
  return (
    <>
      <div className={styles['card']}>
        <div className={styles['head']}>
          <div className={styles['price']}>
            {props.price}
            <span className={styles['currency']} >₽</span>
          </div>
          <button className={styles['add-to-card']}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
          <div className={styles['rating']}>
            {props.rating}
            <img src="/star-icon.svg" alt="Иконка звезды" />
          </div>
        </div>

        <div className={styles['footer']}>
          <h3 className={styles['title']}>{props.title}</h3>
          <p className={styles['description']}>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
