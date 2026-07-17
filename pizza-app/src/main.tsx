import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu.tsx';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Layout/Layout.tsx';
import { Product } from './pages/Product/Product.tsx';

const rounter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
    ],
  },
  {
    path: '/*',
    element: <Error />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rounter} />
  </StrictMode>,
);
