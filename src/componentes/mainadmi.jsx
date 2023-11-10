import React from 'react';
import { Link } from 'react-router-dom';

function MainAdmin() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Panel de Administrador</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Gestión de Usuarios Entradas</h2>
          <p className="text-gray-700">Administra los usuarios de la plataforma.</p>
          <Link to="/entradasusu">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-700">
              Ir a Usuarios
            </button>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Estadísticas</h2>
          <p className="text-gray-700">Visualiza las estadísticas de la plataforma.</p>
          <Link to="/estadisticas">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-700">
              Ver Estadísticas
            </button>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Gestión de Usuarios Salida</h2>
          <p className="text-gray-700">Administra los usuarios de la plataforma.</p>
          <Link to="/usuarios">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-700">
              Ir a Usuarios
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainAdmin;
