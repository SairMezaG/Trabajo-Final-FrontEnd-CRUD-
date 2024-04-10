import React, { useState } from 'react';
import FormularioModal from './Componentes/FormularioModal';
import Tabla from './Componentes/Tabla';
import Filtro from './Componentes/Filtro';
import FormularioEdicion from './Componentes/FormularioEdicion';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarModalAgregar, setMostrarModalAgregar] = useState(false);
  const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [filtroLetra, setFiltroLetra] = useState('');
  const [cantidadRegistros, setCantidadRegistros] = useState(5); // Estado para la cantidad de registros a mostrar

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    cerrarModalAgregar();
  };

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
  };

  const editarUsuario = (usuario) => {
    setUsuarioEditando(usuario);
    abrirModalEdicion();
  };

  const guardarEdicion = (usuarioEditado) => {
    setUsuarios(usuarios.map(u => (u.id === usuarioEditado.id ? usuarioEditado : u)));
    cerrarModalEdicion();
  };

  const abrirModalAgregar = () => {
    setMostrarModalAgregar(true);
  };

  const cerrarModalAgregar = () => {
    setMostrarModalAgregar(false);
  };

  const abrirModalEdicion = () => {
    setMostrarModalEdicion(true);
  };

  const cerrarModalEdicion = () => {
    setUsuarioEditando(null);
    setMostrarModalEdicion(false);
  };

  const handleFiltrarPorLetra = (letra) => {
    setFiltroLetra(letra);
  };

  const handleCambiarCantidadRegistros = (e) => {
    setCantidadRegistros(parseInt(e.target.value)); 
  };

  
  const usuariosFiltrados = filtroLetra
    ? usuarios.filter(usuario => usuario.nombre.toLowerCase().startsWith(filtroLetra.toLowerCase()))
    : usuarios;

  
  const usuariosAMostrar = usuariosFiltrados.slice(0, cantidadRegistros);

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <button onClick={abrirModalAgregar}>Registrar nuevo usuario</button>
      {mostrarModalAgregar && <FormularioModal onGuardar={agregarUsuario} onClose={cerrarModalAgregar} />}
      <Filtro onFiltrar={handleFiltrarPorLetra} />
      <select value={cantidadRegistros} onChange={handleCambiarCantidadRegistros}> {/* Agrega el select para seleccionar la cantidad de registros */}
        <option value="5">Mostrar 5 registros</option>
        <option value="10">Mostrar 10 registros</option>
        <option value="15">Mostrar 15 registros</option>
        <option value="20">Mostrar 20 registros</option>
      </select>
      <Tabla usuarios={usuariosAMostrar} onEditar={editarUsuario} onEliminar={eliminarUsuario} />
      {mostrarModalEdicion && usuarioEditando && (
        <FormularioEdicion usuario={usuarioEditando} onGuardar={guardarEdicion} onClose={cerrarModalEdicion} />
      )}
    </div>
  );
};

export default App;

