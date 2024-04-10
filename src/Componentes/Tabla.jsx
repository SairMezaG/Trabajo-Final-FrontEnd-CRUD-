import React from 'react'
import "../Estilos/Tabla.css"

const Tabla = ({ usuarios, onEditar, onEliminar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.descripcion}</td>
            <td>
              <button onClick={() => onEditar(usuario)}>Editar</button>
              <button onClick={() => onEliminar(usuario.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
