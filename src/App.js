import React, {useState, useEffect} from 'react';
import Frase from './components/Frase'
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .2s ease; 

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`; 

function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  }

  // Cargar una frase
  useEffect( () => {
    consultarApi();
  }, []); 


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
