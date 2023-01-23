import React, { useState } from 'react';
import Header from '../Header/Header';
import Icon from '../../images/icon.svg';
import PageState from '../PageState/PageState';
import api from '../../utils/Api';
import EmptyState from '../EmptyState/EmptyState';
import Preloader from '../Preloader/Preloader';
import Main from '../Main/Main';

function InitialPage() {
  const [person, setPerson] = useState({});
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchIsCompleted, setSearchIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchRepos = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      Promise.all([
        api.getRepositories(searchValue.toLowerCase().replace(/\s/g, '')),
        api.getUserInfo(searchValue),
      ])
        .then((res) => {
          setRepos(res[0]);
          setPerson(res[1]);
          // console.log(res);
        })
        .catch((err) => {
          if (err.status === 404) {
            setPerson({});
            console.log(err);
          }
        })
        .finally(() => {
          setSearchIsCompleted(true);
          setIsLoading(false);
        });
    }
  };
  // console.log(repos);
  // console.log(person);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Header
        onKeyDown={handleSearchRepos}
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      {searchIsCompleted ? (
        <Main repos={repos} person={person} />
      ) : (
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
