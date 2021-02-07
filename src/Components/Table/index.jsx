import React, { useRef, useMemo } from 'react';
import TableHead, { columnsProps } from './TableHead';
import TableBody, { dataProps } from './TableBody';
import ScrollBar from './ScrollBar';
import useSyncScroll from '../../Hooks/useSyncScroll';
import './index.css';

const Table = ({ columns, data }) => {
  const refHead = useRef(null);
  console.log("🚀 ~ file: index.jsx ~ line 10 ~ Table ~ refHead", refHead)
  const refBody = useRef(null);
  console.log("🚀 ~ file: index.jsx ~ line 12 ~ Table ~ refBody", refBody)
  const refsRef = useRef([refHead, refBody]);
  console.log("🚀 ~ file: index.jsx ~ line 12 ~ Table ~ refsRef", refsRef)
  // useSyncScroll(refsRef);
  const width = useMemo(() => columns.reduce((p, c) => p + Number(c.width), 0), columns)

  return (<div className="container" >
    <TableHead  {...{ columns, width }} ref={refHead}></TableHead>
    <TableBody {...{ data, columns, width }} ref={refBody}></TableBody>
    <ScrollBar refsRef={refsRef} />
  </div>)
};

Table.propTypes = {
  data: dataProps,
  columns: columnsProps,
};

export default Table;