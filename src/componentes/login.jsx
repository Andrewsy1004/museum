import React, { useState } from "react";
import muse from "../img/muse.png";
const Login = ({ setAutenticado,rolUusuario }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("Usuario");
   
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuariosRegistrados.find(
      (usuario) => usuario.username === username && usuario.password === password
    );

    if (usuarioExistente) {
      usuarioExistente.autenticado = true;    
      localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
      setAutenticado(true);
      rolUusuario(usuarioExistente.rol); 
      setPassword("");
      setUsername("");
    }else{
      setPassword("");
      setUsername("");
    }
  };

  const handleRegister = () => {
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuariosRegistrados.find(
      (usuario) => usuario.username === username
    );

    if (usuarioExistente) {
      console.log("El usuario ya existe");
      setUsername("");
      setPassword("");
    } else {
      const nuevoUsuario = { username, password, autenticado: false, rol };
      const nuevosUsuarios = [...usuariosRegistrados, nuevoUsuario];
      localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
      console.log("Usuario registrado correctamente");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex">
        <div className="w-1/2">
          <img
            src={muse}
            alt="Imagen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 ml-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Iniciar Sesión
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="text-gray-700">
                Nombre de usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full border rounded-md py-2 px-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nombre de usuario"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full  border rounded-md py-2 px-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleLogin}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300  w-full"
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleRegister}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300  hover:scale-200 w-full"
                >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
