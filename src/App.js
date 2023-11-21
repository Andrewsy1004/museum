import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './componentes/about';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/inicio';
import Portaforio from './componentes/portfolio';
import Hero from './componentes/Hero';
import Login from './componentes/login';
import Menuadmi from './componentes/menuadmi'; 
import { useState, useEffect } from 'react';
import Salirmuseo from './componentes/salirmuseo';
import Logout from './componentes/logout';
import MainAdmin from './componentes/mainadmi';
import EntradasUsu from './componentes/entradasusu';
import SalidadUsu from './componentes/entradasusu';
import { Estadisticas } from './componentes/estadisticas';

function App(){
  const [autenticado, setAutenticado] = useState(false);
  const [rol, setRol] = useState("Usuario");

  useEffect(() => {
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioAdmin = usuariosRegistrados.find(usuario => usuario.username === "admin");
  
    if (!usuarioAdmin) {
      const nuevoUsuarioAdmin = { username: "admin", password: "1004", autenticado: false, rol: "Administrador" };
      const nuevosUsuarios = [...usuariosRegistrados, nuevoUsuarioAdmin];
      localStorage.setItem("usuarios", JSON.stringify(nuevosUsuarios));
    }
  
    const usuarioAutenticado = usuariosRegistrados.find(usuario => usuario.autenticado===true);
    if (usuarioAutenticado) {
      setAutenticado(true);
      setRol(usuarioAutenticado.rol);
    }
  }, []);
  
  return (
    <main>
      {autenticado ? (
        <>
          {rol === "Usuario" ? ( 
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Hero />} exact />
                <Route path="/portfolio" element={<Portaforio />} />
                <Route path="/about" element={<About />} />
                <Route path="/salirmuseo" element={<Salirmuseo />} />
                <Route path="/logout" element={<Logout setAutenticado={setAutenticado} setRolUsuario={setRol} />}/> 

              </Routes>
            </>
          ) : (
            <Routes>
                <Route path="/" element={<MainAdmin />} exact />
                <Route path="/entradasusu" element={<EntradasUsu />} />
                <Route path="/usuarios" element={<SalidadUsu />} />
                <Route path="/estadisticas" element={<Estadisticas />} />
                <Route path="/salirmuseo" element={<Logout setAutenticado={setAutenticado} setRolUsuario={setRol} />}/>
           </Routes>
          )}
        </>
      ) : (
       <Login setAutenticado={setAutenticado} rolUusuario={setRol} />
      )}
    </main>
  );
}

export default App;
