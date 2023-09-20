import React from 'react';
import ReactPaginate from 'react-js-pagination';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  activePage: number;
  handlePageChange: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  activePage,
  totalItems,
  itemsPerPage,
  handlePageChange,
}) => {
  return (
    <div className="pagination">
      <ReactPaginate
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default PaginationComponent;
