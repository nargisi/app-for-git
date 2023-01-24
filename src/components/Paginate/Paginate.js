// import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { perPage } from '../../utils/constants';
import '../Paginate/Paginate.css';

export default function Paginate({ totalRepos, fetchCallBack }) {
  const pageCount = Math.ceil(totalRepos / perPage);
  // console.log('pageCount', pageCount);
  // const pageCount = 4;
  const handlePageClick = (data) => {
    fetchCallBack(data.selected + 1);
    console.log('data', data);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={perPage}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        nextClassName="pagination__num"
        previousClassName="pagination__num"
        pageClassName="pagination__num"
        breakClassName="pagination__break"
        activeLinkClassName="pagination__active"
      />
    </>
  );
}
