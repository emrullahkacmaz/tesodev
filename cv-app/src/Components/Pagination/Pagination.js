import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';


const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div
     style={{flexDirection:'row'}}
    >
      <button
      
        disabled= {currentPage === 1 }
        onClick={onPrevious}
      >
        Previous
        <div className="arrow left" />
      </button>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <button
           
              selected= {pageNumber === currentPage}
              style={{marginLeft:10,marginRight:10, backgroundColor: pageNumber===currentPage ? 'grey' : 'white'}}
           
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
      
    disabled= {currentPage === lastPage}
 
        onClick={onNext}
        
      >
        Next
        <div className="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
