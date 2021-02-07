import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { columnsProps } from './TableHead';

const Row = ({ item, columns, width }) => {
  return (
    <div className="table-body-row" style={{ width: `${width}px` }}>
      {columns.map(c => (<div className="table-body-col" style={{ flexBasis: `${c.width}px` }} key={c.index}>{item[c.index]}</div>))}
    </div>)
};

const TableBody = forwardRef(({ data, columns }, ref) => {
  const width = useMemo(() => (columns.reduce((p, c) => p + Number(c.width), 0)), [columns]);
  return (<div className="table-body" ref={ref} >
    {data.map((d, i) => (<Row item={d} columns={columns} key={i} width={width}></Row>))}
  </div>)
});

export const dataProps = PropTypes.arrayOf(PropTypes.object).isRequired;

TableBody.propTypes = {
  data: dataProps,
  columns: columnsProps,
}

export default TableBody;