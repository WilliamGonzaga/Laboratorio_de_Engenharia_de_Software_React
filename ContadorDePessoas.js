import React, { useState } from 'react';
import './ContadorDePessoas.css';

export default function ContadorDePEssoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="container">
      <h1>Total</h1>
      <div className="total-box">{total}</div>
      <button className="reset" onClick={resetar}>🔄</button>

      <div className="grupo">
        <img src="https://cdn-icons-png.flaticon.com/512/236/236831.png" alt="Homem" />
        <div className="botoes">
          <button onClick={() => setHomens(homens + 1)}>+</button>
          <button onClick={() => setHomens(homens > 0 ? homens - 1 : 0)}>-</button>
        </div>
        <label>Homens</label>
        <input value={homens} readOnly />
      </div>

      <div className="grupo">
        <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Mulher" />
        <div className="botoes">
          <button onClick={() => setMulheres(mulheres + 1)}>+</button>
          <button onClick={() => setMulheres(mulheres > 0 ? mulheres - 1 : 0)}>-</button>
        </div>
        <label>Mulheres</label>
        <input value={mulheres} readOnly />
      </div>
    </div>
  );
}
