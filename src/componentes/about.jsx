import React, { useState } from "react";

function ComprarTicket() {
  const [tipoTicket, setTipoTicket] = useState("plata");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [cantidadTickets, setCantidadTickets] = useState(1);
  const [totalPagar, setTotalPagar] = useState(100);
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [codigoCompra, setCodigoCompra] = useState(null);

  const handleTipoTicketChange = (e) => {
    setTipoTicket(e.target.value);
    actualizarTotalPagar(e.target.value, cantidadTickets);
  };

  const handleNumeroTarjetaChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setNumeroTarjeta(value);
    }
  };

  const handleCantidadTicketsChange = (e) => {
    const cantidad = parseInt(e.target.value, 10);
    setCantidadTickets(cantidad);
    actualizarTotalPagar(tipoTicket, cantidad);
  };

  const actualizarTotalPagar = (tipo, cantidad) => {
    switch (tipo) {
      case "plata":
        setTotalPagar(100 * cantidad);
        break;
      case "bronce":
        setTotalPagar(200 * cantidad);
        break;
      case "oro":
        setTotalPagar(300 * cantidad);
        break;
      default:
        setTotalPagar(100 * cantidad);
    }
  };

  const handleCompraTicket = () => {
    const ticketsComprados = JSON.parse(localStorage.getItem("tickets")) || [];
    const nuevoTicket = {
      tipo: tipoTicket,
      numeroTarjeta,
      codigo: Math.floor(Math.random() * 10000),
      cantidad: cantidadTickets,
      total: totalPagar,
    };
    ticketsComprados.push(nuevoTicket);

    localStorage.setItem("tickets", JSON.stringify(ticketsComprados));

    setCompraExitosa(true);
    setCodigoCompra(nuevoTicket.codigo);

    setNumeroTarjeta("");
    setCantidadTickets(1);
    setTotalPagar(100);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" max-w-4xl w-full p-6 bg-slate-600  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Comprar Ticket</h2>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Tipo de Ticket:</label>
          <select
            value={tipoTicket}
            onChange={handleTipoTicketChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none"
          >
            <option value="plata">Plata (100)</option>
            <option value="bronce">Bronce (200)</option>
            <option value="oro">Oro (300)</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Cantidad de Tickets:</label>
          <input
            required
            type="number"
            value={cantidadTickets}
            min="1"
            onChange={handleCantidadTicketsChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Número de Tarjeta:</label>
          <input
            required
            type="text"
            value={numeroTarjeta}
            onChange={handleNumeroTarjetaChange}
            className="w-full px-4 py-2 border rounded shadow focus:outline-none"
          />
        </div>
        <button
          onClick={handleCompraTicket}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full mb-3"
        >
          Comprar Ticket(s)
        </button>
        {compraExitosa && (
          <div className="text-green-500 text-center font-bold">
            ¡Tickets comprados exitosamente!
          </div>
        )}
        {compraExitosa && (
          <p className="text-green-500 text-center font-bold">
            Total a pagar: ${totalPagar} y su código es: {codigoCompra}
          </p>
        )}
        <div className="text-xl font-bold mt-4 text-center">
          Total a Pagar: <span className="text-blue-500">${totalPagar}</span>
        </div>
      </div>
    </div>
  );
}

export default ComprarTicket;
