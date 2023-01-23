import React from 'react';
import '../../components/Repositories/Repositories.css';

function Repositories(props) {
  return (
    <div className="repositories__container">
      <h1 className="repositories__title">Repositories ({props.length})</h1>
      <div className="repositories__item">
        <h2 className="repositories__item-title">{props.title}</h2>
        <p className="repositories__item-description">
          Tweak React components in real time. (Deprecated: use Fast Refresh
          instead.
        </p>
      </div>
    </div>
  );
}

export default Repositories;
