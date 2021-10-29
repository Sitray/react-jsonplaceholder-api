import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './interfaces';

const App = () => {
  const [state, setstate] = useState<User[]>([]);

  const url: string = 'https://jsonplaceholder.typicode.com/posts';
  const a = async () => {
    const resp = await fetch(url);
    const data: [] = await resp.json();
    console.log(data);
    setstate(data);
  };
  useEffect(() => {
    a();
  }, []);
  return (

    <div>
      {state.map((res) => (
        <div key={res.id}>
          {res.id}
          {' '}
          <div>{res.userId}</div>
          {' '}
          <div>{res.title}</div>
          <div>{res.body}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
