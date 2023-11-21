import React, { useState, useEffect } from 'react';

function SalidadUsu() {
  const [canjeos, setCanjeos] = useState(JSON.parse(localStorage.getItem("salidas")) || []);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda.trim() === "") {
      setCanjeos(JSON.parse(localStorage.getItem("salidas")) || []);
      return;
    }

    const resultados = canjeos.filter(canjeo =>
      canjeo.nombreUsuario.toLowerCase().includes(busqueda.toLowerCase())
    );

    setCanjeos(resultados);
  }, [busqueda]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de salidas</h1>
      <input
        type="text"
        placeholder="Buscar por nombre de usuario"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full px-4 py-2 border rounded shadow focus:outline-none mb-4"
      />
      <ul>
        {canjeos.map((canjeo, index) => (
          <li key={index} className="mb-2 bg-gray-100 p-4 rounded-lg">
            <strong className="text-blue-500">Nombre de Usuario:</strong> {canjeo.nombreUsuario},{' '}
            <strong className="text-blue-500">Fecha de Canjeo:</strong> {canjeo.horaCanje}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SalidadUsu;
