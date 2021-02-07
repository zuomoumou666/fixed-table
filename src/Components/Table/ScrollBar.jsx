import React, { useMemo } from 'react';

const Table = ({ refsRef }) => {
  // const [width, height] = useMemo(() => {
  //   console.log("🚀 ~ file: ScrollBar.jsx ~ line 4 ~ Table ~ refsRef", refsRef)
  //   return refsRef.current.reduce((p, c) => {
  //     const { width: w, height: h } = c.current?.getBoundingClientRect();
  //     console.log("🚀 ~ file: ScrollBar.jsx ~ line 8 ~ returnrefsRef.current.reduce ~ w", w)
  //     console.log("🚀 ~ file: ScrollBar.jsx ~ line 10 ~ returnrefsRef.current.reduce ~ h", h)
  //     return [w + p[0], h + [1]];
  //   }, [0, 0]);
  // }, refsRef);
  const [width, height] = refsRef.current.reduce((p, c) => {
    const { width: w, height: h } = c.current?.getBoundingClientRect() || { width: 0, height: 0 };
    console.log("🚀 ~ file: ScrollBar.jsx ~ line 8 ~ returnrefsRef.current.reduce ~ w", w)
    console.log("🚀 ~ file: ScrollBar.jsx ~ line 10 ~ returnrefsRef.current.reduce ~ h", h)
    return [w + p[0], h + [1]];
  }, [0, 0]);
  console.log("🚀 ~ file: ScrollBar.jsx ~ line 6 ~ const[width,height]=useMemo ~ width, height", width, height)
  return (<div className="scroll-bar">
    <div style={{ width, height }}></div>
  </div>)
};

// Table.propTypes = {
//   data: dataProps,
//   columns: columnsProps,
// };

export default Table;