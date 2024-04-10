import React, { useState } from 'react';
import FormularioModal from './FormularioModal';
import "../Estilos/BotonRegistrarUsuario.css";

const BotonRegistrarUsuario = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div>
      <button className='botonDeRegistro'  id="registrarBtn" onClick={toggleFormulario}>Registrar nuevo usuario</button>
      {mostrarFormulario && <FormularioModal />}
    </div>
  );
};

export default BotonRegistrarUsuario;
