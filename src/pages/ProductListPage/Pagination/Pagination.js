import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Pagination.scss';

function Pagination({ totalPages, updateUrl }) {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort');
  const page = Number(searchParams.get('page'));

  return (
    <ol className="pagination">
      <button
        className="arrow"
        onClick={() => {
          updateUrl({ sort, page: 1 });
        }}
        disabled={page === 1}
      >
        &lt;&lt;
      </button>
      <button
        className="arrow"
        onClick={() => updateUrl({ sort, page: page - 1 })}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(totalPages)
        .fill()
        .map((_, idx) => (
          <button
            key={idx + 1}
            className="pageNum"
            onClick={() => {
              updateUrl({ sort, page: idx + 1 });
            }}
            aria-current={page === idx + 1 ? 'page' : null}
          >
            {idx + 1}
          </button>
        ))}
      <button
        className="arrow"
        onClick={() => {
          updateUrl({ sort, page: page + 1 });
        }}
        disabled={page === totalPages}
      >
        &gt;
      </button>
      <button
        className="arrow"
        onClick={() => {
          updateUrl({ sort, page: totalPages });
        }}
        disabled={page === totalPages}
      >
        &gt;&gt;
      </button>
    </ol>
  );
}

export default Pagination;
