import React from 'react';

function Card({ image, title, price }) {
  return (
    <div className="custom-card">
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="card-info">
        <h3>{title.slice(0, 20)}...</h3>
        <p className="price">${price}</p>
        <button className="buy-button">Select Plan</button>
      </div>
    </div>
  );
}

export default Card;