import React, { useState } from 'react';
import Header from '../Header/Header';
import Icon from '../../images/icon.svg';
import PageState from '../PageState/PageState';
import api from '../../utils/Api';

function InitialPage() {
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchRepos = (event) => {
    if (event.key === 'Enter') {
      api
        .getRepositories(searchValue.toLowerCase().replace(/\s/g, ''))
        .then((res) => {
          setRepos(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  console.log(repos);

  return (
    <>
      <Header
        onKeyDown={handleSearchRepos}
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <div>{JSON.stringify(repos)}</div>
      <PageState
        icon={Icon}
        description={''}
        title={'Start with searching a GitHub user'}
      />
    </>
  );
}

export default InitialPage;
