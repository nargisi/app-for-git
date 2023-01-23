import React from 'react';
import Man from '../../images/Man.svg';
import PageState from '../PageState/PageState';

function EmptyState() {
  return (
    <>
      <PageState icon={Man} description={''} title={'User not found'} />
    </>
  );
}

export default EmptyState;
