import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { columnsProps } from './TableHead';
import ColGroup from './ColGroup';

const Row = ({ item, columns, onClickRow }) => {
  return (
    <tr
      className={`table-body-row ${onClickRow ? 'cursor' : ''}`}
      onClick={() => {
        onClickRow && onClickRow(item);
      }}
    >
      {columns.map(c => (<td className="table-body-col" key={c.index}>{item[c.index]}</td>))}
    </tr>)
};

const TableBody = forwardRef(({ data, columns, width, onClickRow }, ref) => {
  return (<div className="table-body" style={{ width: `${width}px` }} ref={ref} >
    <table>
      <ColGroup columns={columns} />
      <tbody>
        {data.map((d, i) => (<Row item={d} columns={columns} key={i} width={width} onClickRow={onClickRow} ></Row>))}
      </tbody>
    </table>
  </div>)
});

export const dataProps = PropTypes.arrayOf(PropTypes.object).isRequired;

TableBody.propTypes = {
  data: dataProps,
  columns: columnsProps,
  onClickRow: PropTypes.func,
}

export default TableBody;