import React, { useState } from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Peso from './components/Peso';



const altura = (a, setA) => {
  return (
    <div>
      <label>
        Peso
        <input type={'text'} value={a} onChange={(e) => setA(e.target.value)}></input>
      </label>
    </div>
  )
}


function App() {
  const [peso, setPeso] = useState = ('0')
  const [altura, setAltura] = useState = ('0')

  return (
    <div>
      <Peso/>
      <Tabela />
    </div>
  );
}

export default App;
