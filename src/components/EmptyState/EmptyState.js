import React from 'react';
import Header from '../Header/Header';
import Man from '../../images/Man.svg';
import PageState from '../PageState/PageState';

function EmptyState() {
  return (
    <>
      <Header />
      <PageState icon={Man} description={''} title={'User not found'} />
    </>
  );
}

export default EmptyState;
