/* import React, { useState } from 'react';

const FormularioModal = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a la función que los manejará (por ejemplo, una función de agregar usuario)
    // Luego, podrías restablecer los estados para limpiar el formulario
    setId('');
    setNombre('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label htmlFor="descripcion">Descripción:</label>
      <input
        type="text"
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioModal;
 */


/* import React, { useState } from 'react';

const FormularioModal = ({ onGuardar }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ id, nombre, descripcion });
    setId('');
    setNombre('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Registrar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Descripción:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default FormularioModal; */


import React, { useState } from 'react';

const FormularioModal = ({ onGuardar, onClose }) => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ id, nombre, descripcion });
    setId('');
    setNombre('');
    setDescripcion('');
  };

  const handleCancelar = () => {
    onClose();
    setId('');
    setNombre('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Registrar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
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

export default FormularioModal;

