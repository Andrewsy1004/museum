import React, { useState, useEffect } from 'react';

function EntradasUsu() {
  const [canjeosOriginales, setCanjeosOriginales] = useState([]);
  const [canjeosFiltrados, setCanjeosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const canjeos = JSON.parse(localStorage.getItem("salidas")) || [];
    setCanjeosOriginales(canjeos);
    setCanjeosFiltrados(canjeos);
  }, []);

  useEffect(() => {
    if (busqueda.trim() === "") {
      setCanjeosFiltrados(canjeosOriginales);
      return;
    }

    const resultados = canjeosOriginales.filter(canjeo =>
      canjeo.nombreUsuario.toLowerCase().includes(busqueda.toLowerCase())
    );

    setCanjeosFiltrados(resultados);
  }, [busqueda, canjeosOriginales]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Salidas</h1>
      <input
        type="text"
        placeholder="Buscar por nombre de usuario"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full px-4 py-2 border rounded shadow focus:outline-none mb-4"
      />
      <ul>
        {canjeosFiltrados.map((canjeo, index) => (
          <li key={index} className="mb-2 bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-500">Nombre de Usuario:</strong> {canjeo.nombreUsuario},{' '}
            <strong className="text-blue-500">Hora de Salida:</strong> {canjeo.horaSalida}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntradasUsu;
