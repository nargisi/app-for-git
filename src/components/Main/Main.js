import React, { useEffect, useState } from 'react';
import '../../components/Main/Main.css';
import Card from '../Card/Card';
import EmptyListRepos from '../EmptyListRepos/EmptyListRepos';
import EmptyState from '../EmptyState/EmptyState';
import Repositories from '../Repositories/Repositories';
import UserInfo from '../UserInfo/UserInfo';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/Api';

function Main({ searchValue }) {
  const [person, setPerson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getUserInfo(searchValue)
      .then((res) => {
        setPerson(res);
      })
      .catch((err) => {
        if (err.status === 404) {
          setPerson(null);
          console.log(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchValue]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!person) {
    return <EmptyState />;
  }
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__about-user">
            <Card person={person} />
            <UserInfo person={person} />
          </div>
          {person.public_repos === 0 ? (
            <EmptyListRepos />
          ) : (
            <div className="main__repos">
              <h1 className="main__repos-title">
                Repositories ({person.public_repos})
              </h1>
              <Repositories
                searchValue={searchValue}
                totalRepos={person.public_repos}
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Main;
