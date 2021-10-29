import React from 'react';
import useFetchUserData from '../../hooks/useFetchUserData';
import Card from '../Card/Card';

const CardContainer = () => {
  const { data, loading } = useFetchUserData();

  return (

    <div className="container">
      <div className="row">
        {loading && <p>loading</p>}
        {data.map((res) => <Card userId={res.userId} body={res.body} title={res.title} />)}
      </div>
    </div>
  );
};

export default CardContainer;
