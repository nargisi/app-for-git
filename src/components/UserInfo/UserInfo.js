import React from 'react';
import '../../components/UserInfo/UserInfo.css';

function UserInfo() {
  return (
    <div className="userInfo__container">
      <h2 className="userInfo__name">Dan Abramov</h2>
      <h3 className="userInfo__nickname">gaearon</h3>
      <div className="userInfo__statistics">
        <p className="userInfo__statistics-follow">
          <span className="userInfo__statistic-icons"></span>65.8k followers
        </p>
        <p className="userInfo__statistics-follow">
          <span className="userInfo__statistic-icon"></span>171 following
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
