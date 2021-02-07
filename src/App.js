import React, { useEffect, useState, useCallback } from 'react';
import Table from './Components/Table';
import Pagination from './Components/Pagination';
import UserDetailModal from './Components/UserDetailModal';

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
];


const getData = url => fetch(url, { method: 'get' })
  .then(res => res.json())

const getList = page => getData(`https://reqres.in/api/users?page=${page}&per_page=5`);

const getDetail = id => getData(`https://reqres.in/api/users/${id}`);

function App() {
  const [data, updateData] = useState([]);
  const [page, updatePage] = useState(1);
  const [total, updateTotal] = useState(0);

  const [selectedUser, updateSelectedUser] = useState(null);
  const [showModal, updateShowModal] = useState(false);

  useEffect(() => {
    getList(page)
      .then((data) => {
        updateData(data.data);
        updateTotal(data.total_pages)
      });
  }, [page]);
  const goTo = useCallback((p) => {
    updatePage(p);
  }, []);

  const onClickRow = useCallback((p) => {
    getDetail(p.id)
      .then(data => {
        updateSelectedUser(data.data);
        updateShowModal(true);
      })
  }, []);

  const onClose = useCallback(() => {
    updateShowModal(false);
  }, [updateShowModal]);

  return (
    <div className="App">
      <Table data={data} columns={columns} onClickRow={onClickRow} />
      {total ? (<Pagination totalPages={total} page={page} goTo={goTo} />) : null}
      {showModal ? <UserDetailModal visible={showModal} user={selectedUser} onClose={onClose} /> : null}
    </div>
  );
}

export default App;
