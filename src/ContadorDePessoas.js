import React, { useState } from 'react';
import './ContadorDePessoas.css';

export default function ContadorDePessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const total = homens + mulheres;

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="container">
      <button className="reset" onClick={resetar}>🔄</button>
      <h1>Total</h1>
      <div className="total-box">{total}</div>

      <div className="grupo-container">
        <div className="grupo">
          <img src="/img/contadorDePessoas/foto-homem.png" alt="Homem" />
          <div className="botoes">
            <button className="mais" onClick={() => setHomens(homens + 1)}>+</button>
            <button className="menos" onClick={() => setHomens(homens > 0 ? homens - 1 : 0)}>-</button>
          </div>
          <label>Homens</label>
          <input value={homens} readOnly />
        </div>

        <div className="grupo">
          <img src="/img/contadorDePessoas/foto-mulher.png" alt="Mulher" />
          <div className="botoes">
            <button className="mais" onClick={() => setMulheres(mulheres + 1)}>+</button>
            <button className="menos" onClick={() => setMulheres(mulheres > 0 ? mulheres - 1 : 0)}>-</button>
          </div>
          <label>Mulheres</label>
          <input value={mulheres} readOnly />
        </div>
      </div>
    </div>
  );
}
