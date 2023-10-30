import './App.css';
import reactLogo from './imagenes/react-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';


function App() {

  const [numClics, setNumeroClics] = useState(0);

  const manejarClic = () => {
    setNumeroClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumeroClics(0);
  };


  return (
    <div className="App">
      <div className='react-logo-contenedor'>
        <img className='react-logo'
          src={reactLogo}
          alt='logo de react'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
          <Boton 
            texto='Clic'
            esBotonClic={true}
            manejarClic={manejarClic} />
          <Boton 
            texto='Reiniciar'
            esBotonClic={false}
            manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
