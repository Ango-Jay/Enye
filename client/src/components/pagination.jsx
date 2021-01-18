import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const AppPagination = (props) => {
  const { documentsPerPage, totalDocuments, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDocuments / documentsPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers);
  }

  return (
    <React.Fragment>
      {/* <Pagination>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink onClick={() => paginate(number)} href="!#">
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination> */}
      <nav>
        <ul className="pagination text-purple center">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item text-purple">
              <button
                onClick={() => paginate(number)}
                className="btn page-link text-purple link-button"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default AppPagination;
