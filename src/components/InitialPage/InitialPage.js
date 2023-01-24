import React, { useState } from 'react';
import Header from '../Header/Header';
import Icon from '../../images/icon.svg';
import PageState from '../PageState/PageState';
import api from '../../utils/Api';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';
import { perPage } from '../../utils/constants';

function InitialPage() {
  const [person, setPerson] = useState(null);
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchIsCompleted, setSearchIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchRepos = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = (pageNumber = 1) => {
    setIsLoading(true);
    Promise.all([
      api.getRepositories(
        searchValue.toLowerCase().replace(/\s/g, ''),
        pageNumber
      ),
      api.getUserInfo(searchValue),
    ])
      .then((res) => {
        setRepos(res[0]);
        setPerson(res[1]);
      })
      .catch((err) => {
        if (err.status === 404) {
          setPerson(null);
          console.log(err);
        }
      })
      .finally(() => {
        setSearchIsCompleted(true);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Preloader />;
  }
  console.log(repos);

  return (
    <>
      <Header
        onKeyDown={handleSearchRepos}
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      {searchIsCompleted ? (
        <Main repos={repos} person={person} fetchCallBack={fetchData} />
      ) : (
        // <Main searchValue={searchValue} />
        <PageState
          icon={Icon}
          description={''}
          title={'Start with searching a GitHub user'}
        />
      )}
    </>
  );
}

export default InitialPage;
