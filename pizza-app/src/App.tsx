import {  useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {

  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(counter);
    setCounter(2)
  }

  return (
    <>
      <Button onClick={addCounter} appearence='small' >Привет</Button>
      <Button onClick={addCounter} appearence='big' >Привет</Button>
      <Input placeholder='Email' />
    </>
  )

}

export default App
