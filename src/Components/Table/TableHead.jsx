import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TableHead = forwardRef(({ columns, refHead }, ref) => {

  return (<div className="table-head">
    <div className="table-head-row" ref={ref} >
      {columns.map(col => (<div className="table-head-col" key={col.index} style={{ flexBasis: `${col.width}px` }}>{col.title}</div>))}
    </div>
    <div className="gutter"></div>
  </div>)
});

export const columnsProps = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
  })
).isRequired;

TableHead.propTypes = {
  columns: columnsProps,
};

export default TableHead;