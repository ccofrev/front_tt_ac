// src/generadorQR.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';

const GeneradorQR = () => {
  const [hash, setHash] = useState('');

  const generarHash = () => {
    const nuevoHash = uuidv4();
    setHash(nuevoHash);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={generarHash}>Generar Código QR</button>
      {hash && (
        <div style={{ marginTop: '20px' }}>
          <QRCodeCanvas value={hash} size={256} />
          <p>Hash: {hash}</p>
        </div>
      )}
    </div>
  );
};

export default GeneradorQR;
