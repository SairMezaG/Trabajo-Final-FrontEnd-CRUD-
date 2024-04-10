import React from 'react';
import "../Estilos/BotonEliminar.css";

function BotonEliminar({ onClick }) {
  return (
    <div>
       <button onClick={onClick}> Eliminar </button>
    </div>
  )
}

export default BotonEliminar; 



