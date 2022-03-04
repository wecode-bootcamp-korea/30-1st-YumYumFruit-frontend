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
        .map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setPage(idx + 1)}
            aria-current={page === idx + 1 ? 'page' : null}
            className="pageNum"
          >
            {idx + 1}
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
