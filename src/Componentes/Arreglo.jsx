
import React, { useState } from 'react';
import Tabla from './Tabla';
import Filtro from './Filtro';
import Select from './Select';
import Registros from './Registros';

const Arreglo = ({ datos }) => {
  const [filtro, setFiltro] = useState("");
  const [cantidadRegistros, setCantidadRegistros] = useState(20);
  const [datosFiltrados, setDatosFiltrados] = useState(datos);

  const filtroDatos = datosFiltrados.slice(0, cantidadRegistros);

  const filtrarPorLetra = (letra) => {
    const nuevosDatosFiltrados = datos.filter(persona => 
      persona.nombre.toLowerCase().startsWith(letra.toLowerCase())
    );
    setFiltro(letra);
    setDatosFiltrados(nuevosDatosFiltrados);
  };

  const eliminarRegistro = (id) => {
    const newData = datosFiltrados.filter(item => item.id !== id);
    setDatosFiltrados(newData);
  };

  return (
    <div>
      <Filtro filtro={filtro} onFiltroChange={filtrarPorLetra} />
      <Select onChange={(e) => setCantidadRegistros(parseInt(e.target.value))} />
      <br />
      <br />
      <Tabla datos={filtroDatos} eliminarRegistro={eliminarRegistro} />
      
      <Registros cantidadRegistros={filtroDatos.length} totalRegistros={datos.length} />
    </div>
  );
}

export default Arreglo;

 



