import React, { useState } from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Peso from './components/Peso';
import Altura from './components/Altura';

function App() {
  const [peso, setPeso] = useState = ('0')
  const [altura, setAltura] = useState = ('0')

  return (
    <div>
      <Peso/>
      <Altura/>
      <Tabela />
    </div>
  );
}

export default App;
