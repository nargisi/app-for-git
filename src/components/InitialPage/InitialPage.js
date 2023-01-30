import React, { useState } from 'react';
import Header from '../Header/Header';
import Icon from '../../images/icon.svg';
import PageState from '../PageState/PageState';
import Main from '../Main/Main';

function InitialPage() {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchRepos = (event) => {
    if (event.key === 'Enter') {
      setSearchValue(inputValue);
    }
  };

  return (
    <>
      <Header
        onKeyDown={handleSearchRepos}
        value={inputValue}
        onChange={handleChangeSearchValue}
      />
      {searchValue ? (
        <Main searchValue={searchValue} />
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
