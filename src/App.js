import './App.css';
import Table from './Components/Table';
const data = new Array(10).fill(null).map((a, i) => ({
  id: i,
  givenName: `hi ${i}`,
  familyName: 'z',
  email: 'aaa@aaa.com',
}));

const columns = [
  {
    title: 'ID',
    index: 'id',
    width: '50',
  },
  {
    title: 'Given Name',
    index: 'givenName',
    width: '100',
  },
  {
    title: 'Family Name',
    index: 'familyName',
    width: '100',
  },
  {
    title: 'aaa@aaa.com',
    index: 'email',
    width: '120',
  },
]
function App() {
  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
