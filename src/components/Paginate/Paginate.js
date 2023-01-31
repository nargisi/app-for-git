import React from 'react';
import ReactPaginate from 'react-paginate';
import { perPage } from '../../utils/constants';
import '../Paginate/Paginate.css';

export default function Paginate({ totalRepos, setPage }) {
  const pageCount = Math.ceil(totalRepos / perPage);
  // const pageCount = 4;
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        nextClassName="pagination__num"
        previousClassName="pagination__num"
        pageClassName="pagination__num"
        breakClassName="pagination__break"
        activeLinkClassName="pagination__link-active"
        activeClassName="pagination__active"
      />
    </>
  );
}
