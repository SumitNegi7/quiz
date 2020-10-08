import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      {pageNumber.map((number) => (
        <li key={number}>
          <a link="#" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
