import  React from 'react';
import '../hojas_de_estilo/Testimonio.css';


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre} {props.apellido}</strong></p>
        <p className='cargo-testimonio'><strong>{props.cargo} de {props.pais}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}


export default Testimonio;
