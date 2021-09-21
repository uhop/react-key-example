import {useState} from 'react';
import {render} from 'react-dom';

const Data = [
  {id: 'i', name: 'Bob'},
  {id: 'ii', name: 'Joe'},
  {id: 'iii', name: 'Tobi'},
  {id: 'iv', name: 'Loki'},
  {id: 'v', name: 'Jane'},
  {id: 'vi', name: 'Manny'},
  {id: 'vii', name: 'Luna'}
];

const PAGE_SIZE = Math.min(3, Data.length);

const Item = ({item, index}) => (
  <li>
    {item.name} &mdash; {index} &mdash; <input defaultValue={item.name} /> &mdash; <input defaultValue={index} />
  </li>
);

const App = () => {
  const [data, setData] = useState(Data);
  const [page, setPage] = useState(0);

  const array = data.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <>
      <h1>Items (page {page})</h1>
      <ul>
        {array.map((item, index) => (
          <Item key={index} item={item} index={index} />
          // <Item key={item.id} item={item} index={index} />
          // <Item key={item.id + index} item={item} index={index} />
        ))}
      </ul>
      <p>
        <button disabled={page <= 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        &nbsp;
        <button onClick={() => setData(data.slice(-1).concat(data.slice(0, -1)))}>Shift</button>
        &nbsp;
        <button disabled={(page + 1) * PAGE_SIZE >= Data.length} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </p>
    </>
  );
};

render(<App />, document.getElementById('app'));
