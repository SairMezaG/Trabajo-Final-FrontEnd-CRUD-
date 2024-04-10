import React from 'react'


const Registros = ({ cantidadRegistros, totalRegistros }) => {
    return (
      <>
        {cantidadRegistros} de {totalRegistros} registros.
      </>
    );
  }

export default Registros;