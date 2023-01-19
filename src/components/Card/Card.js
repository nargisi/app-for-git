import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="card__container">
      <img
        className="card__picture"
        src="https://avatars.githubusercontent.com/u/810438?v=4"
        alt="User"
      />
    </div>
  );
}

export default Card;
