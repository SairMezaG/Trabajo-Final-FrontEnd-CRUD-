import React, { useState } from 'react';

const FormularioEdicion = ({ usuario, onGuardar, onClose }) => {
  const [nombre, setNombre] = useState(usuario.nombre);
  const [descripcion, setDescripcion] = useState(usuario.descripcion);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ ...usuario, nombre, descripcion });
    onClose();
  };

  const handleCancelar = () => {
    onClose();
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <button type="submit">Guardar</button>
        <button type="button" onClick={handleCancelar}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormularioEdicion;
