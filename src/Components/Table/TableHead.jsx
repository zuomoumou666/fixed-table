import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ColGroup from './ColGroup';

const TableHead = forwardRef(({ columns, width }, ref) => {

  return (<div className="table-head">
    <table className="table" style={{ width: `${width}px` }} ref={ref}>
      <ColGroup columns={columns} />
      <tbody>
        <tr className="table-head-row" >
          {columns.map(col => (<td className="table-head-col" key={col.index}>{col.title}</td>))}
        </tr>
      </tbody>
    </table>
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