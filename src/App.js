import React, {useState} from 'react';
import Frase from './components/Frase'
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`; 

function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={() => consultarApi()}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
