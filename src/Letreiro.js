import './Letreiro.css';
import React, { useEffect } from 'react';

export default function Letreiro() {
  useEffect(() => {
    LetreiroAnimacao('letreiros', 'Conheça a Fatec');
  }, []);

  return (
    <div>
      <h1>Letreiro</h1>
      <p>Meu Letreiro</p>
      <div className="Letreiros" id="letreiros"></div>
    </div>
  );
}

function LetreiroAnimacao(elementId, texto, velocidade = 200) {
  const elemento = document.getElementById(elementId);
  let i = 0;

  function digitar() {
    if (i <= texto.length) {
      elemento.textContent = texto.substring(0, i);
      i++;
      setTimeout(digitar, velocidade);
    } else {
      setTimeout(() => {
        i = 0;
        digitar();
      }, 1000);
    }
  }

  if (elemento) digitar();
}
