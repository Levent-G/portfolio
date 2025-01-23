import React, { useState } from 'react';
import './deneme.css';

const Deneme = () => {
  const [moveButton, setMoveButton] = useState(false);
  const [explosion, setExplosion] = useState(false);
  const [hasMoved, setHasMoved] = useState(false); // Butonun hareket edip etmediğini takip etmek için

  const handleMouseEnter = () => {
    // Eğer buton daha önce hareket etmediyse, hareket etmesini sağlıyoruz
    if (!hasMoved) {
      setMoveButton(true);
      setHasMoved(true); // Buton bir kere hareket etti
    }
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
      <label>Seçiminizi yapın</label>
      <div>
        <button
          className={`evet ${explosion ? 'patlama' : ''}`}
          onClick={handleClickEvet}
        >
          Evet
        </button>
       
      </div>
    </div>
  );
}

export default Deneme;
