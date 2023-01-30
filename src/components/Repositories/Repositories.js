import React, { useEffect, useState } from 'react';
import '../../components/Repositories/Repositories.css';
import api from '../../utils/Api';
import Paginate from '../Paginate/Paginate';

function Repositories({ searchValue, totalRepos }) {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    api
      .getRepositories(searchValue.toLowerCase().replace(/\s/g, ''), page)
      .then((res) => {
        setRepos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue, page]);

  return (
    <>
      <ul className="main__repos-container">
        {repos.map((repo) => (
          <li key={repo.id} className="repositories__item">
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
        ))}
      </ul>
      <Paginate totalRepos={totalRepos} setPage={setPage} />
    </>
  );
}

export default Repositories;
