import React from "react";

import { usePagination } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
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
    <div style={{ display: "flex" }}>
      <button
        style={{
          fontSize: "14px",
          lineHeight: "16px",
          fontFamily: "Roboto",
          fontWeight: 700,
          width: "85px",
          height: "25px",
          backgroundColor: "#FFFFFF",
          borderColor: "#484848",
          borderRadius: "4px",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <div style={{ marginTop: "-4px", color: "#484848" }}> Previous</div>
      </button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === ". . .") {
          return <div className="pagination-item dots">&#8230;</div>;
        }

        return (
          <button
            selected={pageNumber === currentPage}
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontFamily: "Roboto",
              fontWeight: 700,
              marginTop: "2px",
              width: "27px",
              height: "20px",
              marginLeft: 10,
              marginRight: 10,
              backgroundColor:
                pageNumber === currentPage ? "#204080" : "#FFFFFF",
              color: pageNumber === currentPage ? "#FFFFFF" : "#484848",
              borderColor: "#484848",
              borderRadius: "4px",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
            onClick={() => onPageChange(pageNumber)}
          >
            <div style={{ marginTop: "-5px" }}> {pageNumber}</div>
          </button>
        );
      })}
      <button
        style={{
          fontSize: "14px",
          lineHeight: "16px",
          fontFamily: "Roboto",
          fontWeight: 700,
          width: "85px",
          height: "25px",
          backgroundColor: "#FFFFFF",
          borderColor: "#484848",
          borderRadius: "4px",
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <div style={{ marginTop: "-4px", color: "#484848" }}> Next</div>
      </button>
    </div>
  );
};

export default Pagination;
