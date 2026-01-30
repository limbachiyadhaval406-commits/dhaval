import React from 'react';
import './main.css';

import ironmanImg from './iron.jpg';
import grootImg from './groot.jpg';
import spidermanImg from './spider.jpg';
import thorImg from './thor.jpg';
import captainImg from './cap1.jpg';

function Marvel() {
  return (
    <div className="container">
      <h1 className="title">MARVEL UNIVERSE</h1>
      <div className="gallery-grid">
        {/* Card 1 */}
        <div className="card">
          <img src={ironmanImg} alt="Iron Man" className="card-img" />
          <div className="card-name">IRON MAN</div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={grootImg} alt="Groot" className="card-img" />
          <div className="card-name">GROOT</div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={spidermanImg} alt="Spider-Man" className="card-img" />
          <div className="card-name">SPIDER-MAN</div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src={thorImg} alt="Thor" className="card-img" />
          <div className="card-name">THOR</div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img src={captainImg} alt="Captain America" className="card-img" />
          <div className="card-name">CAPTAIN AMERICA</div>
        </div>

      </div>
    </div>
  );
}

export default Marvel;