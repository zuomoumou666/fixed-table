import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { columnsProps } from './TableHead';
import ColGroup from './ColGroup';

const Row = ({ item, columns }) => {
  return (
    <tr className="table-body-row">
      {columns.map(c => (<td className="table-body-col" key={c.index}>{item[c.index]}</td>))}
    </tr>)
};

const TableBody = forwardRef(({ data, columns, width }, ref) => {
  return (<div className="table-body" style={{ width: `${width}px` }} >
    <table className="table" ref={ref} >
      <ColGroup columns={columns} />
      <tbody className="table-body" >
        {data.map((d, i) => (<Row item={d} columns={columns} key={i} width={width}></Row>))}
      </tbody>
    </table>
  </div>)
});

export const dataProps = PropTypes.arrayOf(PropTypes.object).isRequired;

TableBody.propTypes = {
  data: dataProps,
  columns: columnsProps,
}

export default TableBody;