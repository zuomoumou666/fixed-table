import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';


const Page = ({ curPage, page, onClick }) => {
  return <p key={page} onClick={e => onClick(page)} className={`page-btn ${curPage === page ? 'active' : ''}`}>{page}</p>
}

const Pagination = ({ totalPages, page, goTo }) => {
  const pages = useMemo(() => {
    if (!totalPages) return [];
    const arr = ['<<', '<'];
    new Array(totalPages).fill(null).forEach((a, i) => arr.push(i + 1));
    arr.push('>', '>>');
    return arr;
  }, [totalPages]);

  const onClick = useCallback((p) => {
    const map = {
      '<<': 1,
      '<': page - 1,
      '>': page + 1,
      '>>': totalPages,
    };
    if (p !== page) {
      goTo(map[p] || p);
    }
  }, [page, totalPages, goTo]);

  return (<div className="pagination" >
    {pages.map(p => (<Page key={p} curPage={page} page={p} onClick={onClick} />))}
  </div>)
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  page: PropTypes.number,
};

export default Pagination;