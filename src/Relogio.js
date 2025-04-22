import React, { useEffect, useState } from 'react';
import './Relogio.css';

export default function Relogio() {
  const [horario, setHorario] = useState('00:00:00');

  useEffect(() => {
    const atualizarRelogio = () => {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');
      setHorario(`${horas}:${minutos}:${segundos}`);
    };

    atualizarRelogio(); // Atualiza imediatamente
    const intervalo = setInterval(atualizarRelogio, 1000); // Atualiza a cada 1 segundo

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div>
      <h1>Relógio</h1>
      <p>Meu Relógio</p>
      <main>
        <p>Horário Atual:</p>
        <div id="relogio">{horario}</div>
      </main>
    </div>
  );
}
