import { useState } from 'react';
import './App.css';
import { Counter } from './components/counter';

function App() {
  
  const [value,setValue]=useState(0)

  const incValue = () => {
    setValue( value +1 )
  }
  const reset = () => {
    setValue( 0 )
  }

  return (
    <div className="App" >
     <Counter inc={value} incValue={incValue} reset={reset} />
    </div>
  );
}

export default App;
