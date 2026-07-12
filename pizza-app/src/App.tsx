import { useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  

  return (
    <>
      <Button onClick={addCounter} appearence="small">
        Привет
      </Button>
      <Button onClick={addCounter} appearence="big">
        Привет
      </Button>
      <Input placeholder="Email" />

      <div className="">
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
