import React, { useState } from 'react';
import './App.css';
import Peso from './components/Peso'
import Altura from './components/Altura'
import Calcular from './components/Calcular';
import Resultado from './components/Resultado'
import Tabela from './components/Tabela'

export default function App() {
  const [peso, setPeso] = useState(0)  
  const [altura, setAltura] = useState(0) 
  const [resultado, setResultado] = useState(0)

  return (
    <div>
      <Peso />
      <Altura />
      <Calcular />
      <Resultado />
      <Tabela />
    </div>
  );
}


