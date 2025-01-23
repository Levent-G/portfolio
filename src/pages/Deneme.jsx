import React, { useState } from 'react';
import './deneme.css';

const Deneme = () => {
  const [explosion, setExplosion] = useState(false);

 



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
