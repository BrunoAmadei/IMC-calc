import React, { useState } from 'react';
import './App.css';
import Peso from './components/Peso'
import Altura from './components/Altura'
import Calcular from './components/Calcular';
import Resultado from './components/Resultado'
import Tabela from './components/Tabela'

export default function App() {
  const [peso, setPeso] = useState()  
  const [altura, setAltura] = useState() 
  const [resultado, setResultado] = useState(0)

  return (
    <div className='caixa'>
      <Peso p={peso} setP={setPeso} />
      <Altura a={altura} setA={setAltura}/>
      <Calcular peso={peso} altura={altura} res={setResultado} />
      <Resultado r={resultado} />
      <Tabela />
    </div>
  );
}
