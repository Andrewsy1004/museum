import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

 function Logout ({ setAutenticado, setRolUsuario }){
  
  const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
  const navigate = useNavigate(); // Obtener el objeto navigate

  useEffect(() => {
    const usuarioAutenticado = usuariosRegistrados.find(usuario => usuario.autenticado===true);
    if (usuarioAutenticado) {
      usuarioAutenticado.autenticado = false;
      setAutenticado(false);
      setRolUsuario(usuarioAutenticado.rol);
      console.log(usuarioAutenticado);
      localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
      navigate('/'); // Redirigir a la página principal

    }
  }, [setAutenticado, setRolUsuario]);
  
  return null; // En lugar de <></>
}

export default Logout;
