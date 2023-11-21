import React, { useState } from 'react';

function Portafolio() {
  const [codigoTicket, setCodigoTicket] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [ticketCanjeado, setTicketCanjeado] = useState(false);

  const handleCodigoChange = (e) => {
    setCodigoTicket(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombreUsuario(e.target.value);
  };

  const handleCanjear = () => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const salidas = JSON.parse(localStorage.getItem("salidas")) || [];
    const canjeos = JSON.parse(localStorage.getItem("canjeos")) || [];

    const ticketIndex = tickets.findIndex(
      (ticket) => ticket.codigo === parseInt(codigoTicket) 
    );
     
    const nombreUs = canjeos.find(
      (canjeo) => canjeo.nombreUsuario === nombreUsuario
    )
     
    
    if (ticketIndex !== -1 && nombreUs!==-1) {
      const ticketCanjeado = tickets[ticketIndex];

      ticketCanjeado.horaSalida = new Date().toLocaleString();
      ticketCanjeado.nombreUsuario = nombreUsuario;

      tickets[ticketIndex] = ticketCanjeado;
      localStorage.setItem("tickets", JSON.stringify(tickets));

      const nuevaSalida = {
        codigo: ticketCanjeado.codigo,
        nombreUsuario: nombreUsuario,
        horaSalida: ticketCanjeado.horaSalida,
      };

      salidas.push(nuevaSalida);
      localStorage.setItem("salidas", JSON.stringify(salidas));

      setTicketCanjeado(true);
    } else {
      alert("Código de ticket inválido o ya canjeado. Por favor, verifica el código e intenta de nuevo.");
    }

    setCodigoTicket("");
    setNombreUsuario("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl w-screen p-6 bg-slate-600 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Canjeo ticket salida</h1>
        {ticketCanjeado ? (
          <p className="text-green-500 text-center font-bold">
            ¡Ticket canjeado exitosamente! Hasta la próxima, {nombreUsuario}!
          </p>
        ) : (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-bold" htmlFor="codigoTicket">
                Código de Ticket:
              </label>
              <input
                id="codigoTicket"
                type="text"
                value={codigoTicket}
                onChange={handleCodigoChange}
                className="px-4 py-3 border rounded-full focus:outline-none w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold w-full" htmlFor="nombreUsuario">
                Nombre de Usuario:
              </label>
              <input
                id="nombreUsuario"
                type="text"
                value={nombreUsuario}
                onChange={handleNombreChange}
                className="px-4 py-3 border rounded-full focus:outline-none w-full"
              />
            </div>
            <button
              onClick={handleCanjear}
              className="bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-700 w-full"
            >
              Canjear
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Portafolio;
