import React from 'react';
import '../../components/Main/Main.css';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Repositories from '../Repositories/Repositories';
import UserInfo from '../UserInfo/UserInfo';

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <div className="main__about-user">
            <Card />
            <UserInfo />
          </div>
          <div className="main__repos">
            <Repositories />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
