import React from 'react';
import '../../components/Repositories/Repositories.css';

function Repositories({ repo }) {
  return (
    <>
      <li className="repositories__item">
        <a
          className="repositories__link"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="repositories__item-title">{repo.name}</h2>
        </a>
        <p className="repositories__item-description">{repo.description}</p>
      </li>
    </>
  );
}

export default Repositories;
