import React from 'react';
import './Card.css';

function Card({ person }) {
  return (
    <div className="card__container">
      <img className="card__picture" src={person.avatar_url} alt="User" />
    </div>
  );
}

export default Card;
