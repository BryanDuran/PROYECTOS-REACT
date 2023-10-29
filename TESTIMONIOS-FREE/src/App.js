import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contendor-principal'>
        <h1>Los integrantes del equipo 7 de la serie "Naruto"</h1>
        <Testimonio
        nombre='Naruto'
        apellido='Uzumaki'
        cargo='Ninja'
        pais='Konoha'
        testimonio='Naruto es un ninja de Konoha y forma parte del «Equipo 7», compuesto por <strong>Sasuke Uchiha</strong>, <strong>Sakura Haruno</strong> y su líder y sensei, <strong>Kakashi Hatake</strong>. ​ Más tarde, Sasuke abandona el equipo tras huir de la aldea en busca de Orochimaru, así que posteriormente es reemplazado en el grupo por Sai.'        imagen='naruto' />

        <Testimonio
        nombre='Sakura'
        apellido='Haruno'
        cargo='Kunoichi'
        pais='Konoha'
        testimonio='Sakura es una kunoichi de la Aldea Oculta de la Hoja y forma parte del «Equipo 7», compuesto por Naruto Uzumaki, Sasuke Uchiha y su sensei, Kakashi Hatake; aunque luego Sasuke abandona el equipo y posteriormente se introduce a Sai como su reemplazo.'
        imagen='sakura' />

         <Testimonio
        nombre='Sasuke'
        apellido='Uchiha'
        cargo='Ninja'
        pais='Konoha'
        testimonio='Sasuke es uno de los personajes de la manga y anime naruto y procede del famoso clan Uchiha, uno de los más antiguos y poderosos clanes de Konoha, fue uno de los 4 integrantes del equipo 7.'
        imagen='sasuke' />

        <Testimonio
        nombre='kakashi'
        apellido='Hatake'
        cargo='Ninja'
        pais='Konoha'
        testimonio='Es un ninja de la Aldea Oculta de la Hoja, y es el líder y sensei del «Equipo 7», compuesto por Naruto Uzumaki, Sasuke Uchiha y Sakura Haruno.'
        imagen='kakashi' />
      </div>
      </div>
  );
}

export default App;
