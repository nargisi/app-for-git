import React from 'react';
import '../../components/UserInfo/UserInfo.css';

function UserInfo() {
  return (
    <div className="userInfo__container">
      <h2 className="userInfo__name">Dan Abramov</h2>
      <h3 className="userInfo__nickname">gaearon</h3>
      <div className="userInfo__statistics">
        <span className="userInfo__statistic-icons"></span>
        <p className="userInfo__statistics-follow">65.8k followers</p>
        <span className="userInfo__statistic-icon"></span>
        <p className="userInfo__statistics-follow">171 following</p>
      </div>
    </div>
  );
}

export default UserInfo;
