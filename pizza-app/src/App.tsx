import { useEffect, useState, type MouseEvent } from 'react';
import './App.css'
import Button from './components/Button/Button';

function App() {

  const [counter SetCounter] = useState<number>();

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  }

  return (
    <>
      <Button onClick={addCounter} >Привет</Button>
    </>
  )

}

export default App
