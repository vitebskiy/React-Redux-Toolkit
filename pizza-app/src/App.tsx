import {  useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';

function App() {

  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(counter);
    setCounter(2)
  }

  return (
    <>
      <Button onClick={addCounter} >Привет</Button>
    </>
  )

}

export default App
