import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-1 flex justify-between items-center">
      <div className="flex items-center">
        <div className="dropdown mr-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-gray-900 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-blue-500">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-blue-500">
                Canjear tickets Entrada
              </Link>
            </li>
            <li>
              <Link to="/salirmuseo" className="text-blue-500">
                Canjear tickets Salida
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-blue-500">
                Compra ticket
              </Link>
            </li>
            <li>
              <Link to="/logout" className="text-blue-500">
                Log out
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold text-white">Museum</h1>
      </div>
      <div className="navbar-end"></div>
    </nav>
  );
};

export default Navbar;
