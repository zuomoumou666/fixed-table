import React from 'react';
import PropTypes from 'prop-types';

const ColGroup = ({ columns }) => {
  return (<colgroup>
    {columns.map(c => (<col span="1" key={c.index} style={{ width: `${c.width}px` }} />))}
  </colgroup>)
};

export const columnsProps = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
  })
).isRequired;

ColGroup.propTypes = {
  columns: columnsProps,
};

export default ColGroup;