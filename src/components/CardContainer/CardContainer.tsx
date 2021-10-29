import React from 'react';
import useFetchUserData from '../../hooks/useFetchUserData';
import Card from '../Card/Card';

import './CardContainer.css';

const CardContainer = () => {
  const { data, loading } = useFetchUserData();
  return (

    <div className="container">

      {loading && <p>loading</p>}
      {data.map((res) => (

        <div className="row" key={res.id}>
          <Card userId={res.userId} body={res.body} title={res.title} />

        </div>
      ))}

    </div>
  );
};

export default CardContainer;
