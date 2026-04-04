import React from 'react';
import brideImage from '../assets/bride.png';
import groomImage from '../assets/groom.png';

function LoadingScreen({ isMerging }) {
  return (
    <div className={`loader-overlay ${isMerging ? 'is-merging' : ''}`}>
      <div className="loader-pair">
        <div className="loader-actor bride-actor">
          <img src={brideImage} alt="Bride" className="loader-character" />
        </div>
        <div className="loader-actor groom-actor">
          <img src={groomImage} alt="Groom" className="loader-character" />
        </div>
      </div>
      <p className="loader-text">Loading your invitation...</p>
    </div>
  );
}

export default LoadingScreen;
