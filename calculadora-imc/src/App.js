import React, { useState } from 'react';
import './App.css';
import Tabela from './components/Tabela';
import Peso from './components/Peso';
import Altura from './components/Altura';
import Calcular from './components/Calcular';
import Resultado from './components/Resultado';

function App() {
  const [peso, setPeso] = useState = (0)
  const [altura, setAltura] = useState = (0)
  const [resultado, setResultado] = useState(0)
  return (
    <div>
      <Peso p={peso} setP={setPeso} />
      <Altura a={altura} setA={setAltura} />
      <Calcular peso={peso} altura={altura} res={setResultado} />
      <Resultado r={resultado}/>
      <Tabela />
    </div>
  );
}

export default App;
