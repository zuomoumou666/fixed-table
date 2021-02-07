import React from 'react';
import PropTypes from 'prop-types';
import ColGroup from './ColGroup';

const TableHead = ({ columns, width, fixed }) => {

  return (<div className="table-head">
    <table style={{ width: `${fixed ? width - 15 : width}px` }} >
      <ColGroup columns={columns} />
      <tbody>
        <tr className="table-head-row" >
          {columns.map(col => (<td className="table-head-col" key={col.index}>{col.title}</td>))}
        </tr>
      </tbody>
    </table>
  </div>)
};

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
  fixed: PropTypes.bool,
};

export default TableHead;