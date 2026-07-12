import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'

export function Layout() {
  return (
    <>
      <div className={styles['layout']} >
        <div className={styles['menu']} >
          <Link to="/">Меню</Link>
          <Link to="/cart">Корзина</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
