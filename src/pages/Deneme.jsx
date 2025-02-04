import React, { useState } from 'react';
import './deneme.css';

const Deneme = () => {
  const [explosion, setExplosion] = useState(false);
  const [position, setPosition] = useState({ top: 'auto', left: 'auto' });
  const [initial, setInitial] = useState(true);
  const [buttonText, setButtonText] = useState('Olmaz');

  const handleClickEvet = () => {
    setExplosion(true);
    setTimeout(() => {
      setExplosion(false);
    }, 500);
  };

  const handleMouseEnterHayir = () => {
    if (initial) setInitial(false);
    const randomTop = Math.floor(Math.random() * 180) + 100; // 10% - 90%
    const randomLeft = Math.floor(Math.random() * 180) + 100; // 10% - 90%
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setButtonText('Olur');
  };

  return (
    <div className="container">
      <div className="kalp">
        <span sx={{fontSize:"50px"}}>Selbim</span>
      </div>
      <label>Kalbin içinden hiç çıkma olur mu ?</label>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', position: 'relative' }}>
        <button
          className={`evet ${explosion ? 'patlama' : ''}`}
          onClick={handleClickEvet}
        >
          Olur
        </button>
        <button
          className="hayir"
          style={initial ? {} : { position: 'absolute', top: position.top, left: position.left }}
          onMouseEnter={handleMouseEnterHayir}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Deneme;
