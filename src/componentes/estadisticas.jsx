import React, { useEffect, useState } from 'react';

export function Estadisticas() {
  const [totalIngresos, setTotalIngresos] = useState(0);

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const sumaTotal = tickets.reduce((total, ticket) => total + ticket.total, 0);
    setTotalIngresos(sumaTotal);
  }, []);

  // Función para formatear el número con puntos
  const formatearNumero = (numero) => {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700 p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Estadísticas de Ingresos</h1>
        <p className="text-lg text-gray-600">
          Total de Ingresos: <span className="font-bold text-green-500">${formatearNumero(totalIngresos)}</span>
        </p>
      </div>
    </div>
  );
}
