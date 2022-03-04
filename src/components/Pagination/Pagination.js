import React from 'react';
import './Pagination.scss';

function Pagination({ totalPages, page, setPage }) {
  const isFirstBtnValid = page === 1;
  const isLastBtnValid = page === totalPages;

  return (
    <ol className="pagination">
      <button
        className="arrow"
        onClick={() => setPage(1)}
        disabled={isFirstBtnValid}
      >
        &lt;&lt;
      </button>
      <button
        className="arrow"
        onClick={() => setPage(page - 1)}
        disabled={isFirstBtnValid}
      >
        &lt;
      </button>
      {Array(totalPages)
        .fill()
        .map((paging, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
            className="pageNum"
          >
            {i + 1}
          </button>
        ))}
      <button
        className="arrow"
        onClick={() => setPage(page + 1)}
        disabled={isLastBtnValid}
      >
        &gt;
      </button>
      <button
        className="arrow"
        onClick={() => setPage(totalPages)}
        disabled={isLastBtnValid}
      >
        &gt;&gt;
      </button>
    </ol>
  );
}

export default Pagination;
