import React, { useState } from 'react';
import './deneme.css';

const Deneme = () => {
  const [moveButton, setMoveButton] = useState(false);
  const [explosion, setExplosion] = useState(false);

  const handleMouseEnter = () => {
    setMoveButton(true);
  };

  const handleMouseLeave = () => {
    setMoveButton(false);
  };

  const handleClickEvet = () => {
    setExplosion(true);
    setTimeout(() => {
      setExplosion(false);
    }, 500); // Patlama efekti bitene kadar bekliyoruz
  };

  return (
    <div className="container">
      <div className="kalp">
        <span>Selbim</span>
      </div>
      <label>Kalbin içinde hep aynı kişi mi olucak</label>
      <div>
        <button
          className={`evet ${explosion ? 'patlama' : ''}`}
          onClick={handleClickEvet}
        >
          Evet
        </button>
        <button
          className={`hayir ${moveButton ? 'hayir-hover' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hayır
        </button>
      </div>
    </div>
  );
}

export default Deneme;
