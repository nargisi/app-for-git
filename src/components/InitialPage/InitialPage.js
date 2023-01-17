import React from 'react';
import Header from '../Header/Header';
import Icon from '../../images/icon.svg';
import PageState from '../PageState/PageState';

function InitialPage() {
  return (
    <>
      <Header />
      <PageState
        icon={Icon}
        description={''}
        title={'Start with searching a GitHub user'}
      />
    </>
  );
}

export default InitialPage;
