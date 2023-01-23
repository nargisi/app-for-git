import React from 'react';
import Rectangle from '../../images/Rectangle.svg';
import PageState from '../PageState/PageState';

function EmptyListRepos() {
  return (
    <>
      <PageState
        icon={Rectangle}
        description={''}
        title={'Repository list is empty'}
      />
    </>
  );
}

export default EmptyListRepos;
