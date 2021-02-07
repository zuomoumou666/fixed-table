import React, { useRef, useMemo } from 'react';
import TableHead, { columnsProps } from './TableHead';
import TableBody, { dataProps } from './TableBody';
import useSyncScroll from '../../Hooks/useSyncScroll';
import './index.css';

const Table = ({ columns, data }) => {
  const refFixed = useRef(null);
  const refRest = useRef(null);
  const refsRef = useRef([refFixed, refRest]);
  useSyncScroll(refsRef);
  const [fixedTable, restTable] = useMemo(() => {
    const fixed = { width: 15, columns: [] };
    const rest = { width: 0, columns: [] };
    columns.forEach(c => {
      if (c.fixed) {
        fixed.columns.push(c);
        fixed.width += Number(c.width);
      } else {
        rest.columns.push(c);
        rest.width += Number(c.width);
      }
    });
    return [fixed, rest];
  }, [columns]);

  return (<div className="container" >
    <div className="fixed-table table" style={{ width: `${fixedTable.width}px` }}>
      <TableHead  {...{ ...fixedTable, fixed: true }} ></TableHead>
      <TableBody {...{ data, ...fixedTable }} ref={refFixed}></TableBody>
    </div>
    <div className="rest-table table" style={{ width: `${restTable.width}px` }}>
      <div className="flipped" style={{ height: '100%' }}>
        <TableHead  {...{ ...restTable }} ></TableHead>
        <TableBody {...{ data, ...restTable }} ref={refRest}></TableBody>
      </div>
    </div>
  </div>)
};

Table.propTypes = {
  data: dataProps,
  columns: columnsProps,
};

export default Table;