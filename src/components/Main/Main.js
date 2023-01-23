import React from 'react';
import '../../components/Main/Main.css';
import Card from '../Card/Card';
import EmptyListRepos from '../EmptyListRepos/EmptyListRepos';
import Repositories from '../Repositories/Repositories';
import UserInfo from '../UserInfo/UserInfo';

function Main({ repos, person }) {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__about-user">
            <Card person={person} />
            <UserInfo person={person} />
          </div>
          {repos.length === 0 ? (
            <EmptyListRepos />
          ) : (
            <div className="main__repos">
              <h1 className="main__repos-title">
                Repositories ({repos.length})
              </h1>
              <ul className="main__repos-container">
                {repos.map((repo) => (
                  <Repositories key={repo.id} repo={repo} repos={repos} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Main;
