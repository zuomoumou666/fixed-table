import React, { useRef } from 'react';
import TableHead, { columnsProps } from './TableHead';
import TableBody, { dataProps } from './TableBody';
import useSyncScroll from '../../Hooks/useSyncScroll';
import './index.css';

const Table = ({ columns, data }) => {
  const refHead = useRef(null);
  const refBody = useRef(null);
  const refsRef = useRef([refHead, refBody]);
  useSyncScroll(refsRef);

  return (<div className="table" >
    <TableHead  {...{ columns }} ref={refHead}></TableHead>
    <TableBody {...{ data, columns }} ref={refBody}></TableBody>
  </div>)
};

Table.propTypes = {
  data: dataProps,
  columns: columnsProps,
};

export default Table;