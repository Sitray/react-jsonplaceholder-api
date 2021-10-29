import React from 'react';

import useFetchUserData from './hooks/useFetchUserData';

const App = () => {
  const { data, loading } = useFetchUserData();
  console.log(data);
  return (

    <div>
      {loading && <p>loading</p>}

      {data.map((res) => (
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
