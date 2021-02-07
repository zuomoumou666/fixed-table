import React, { useEffect, useState, useCallback } from 'react';
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import './App.css';

const columns = [
  {
    title: 'ID',
    index: 'id',
    width: '80',
    fixed: true,
  },
  {
    title: 'Given Name',
    index: 'first_name',
    width: '100',
  },
  {
    title: 'Family Name',
    index: 'last_name',
    width: '100',
  },
  {
    title: 'Email',
    index: 'email',
    width: '200',
  },
]
const getData = page => fetch(`https://reqres.in/api/users?page=${page}&per_page=5`, { method: 'get' })
  .then(res => res.json());
function App() {
  const [data, updateData] = useState([]);
  const [page, updatePage] = useState(1);
  const [total, updateTotal] = useState(0);
  useEffect(() => {
    getData(page)
      .then((data) => {
        updateData(data.data);
        updateTotal(data.total_pages)
      });
  }, [page]);
  const goTo = useCallback((p) => {
    updatePage(p);
  }, []);
  const onClickRow = useCallback((p) => {
    console.log("🚀 ~ file: App.js ~ line 46 ~ onClickRow ~ p", p)
  }, []);
  return (
    <div className="App">
      <Table data={data} columns={columns} onClickRow={onClickRow} />
      {total ? (<Pagination totalPages={total} page={page} goTo={goTo} />) : null}
    </div>
  );
}

export default App;
