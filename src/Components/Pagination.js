import React from "react";
import { usePagination, DOTS } from "../Hooks/usePagination";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  //We call the usePagination to calculate the pagination range
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
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
    <ul className={`pagination-container ${className}`}>
      <li className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`} onClick={onPrevious}>
        <i className="fa-solid fa-arrow-left"></i>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={`pagination-item ${pageNumber === currentPage ? "selected" : ""}`}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </li>
    </ul>
  );
};

export default Pagination;
