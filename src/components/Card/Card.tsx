import React from 'react';

import './Card.css';

interface Props {
     userId: number,
     title: string,
     body: string,

}

const Card = ({ userId, title, body }: Props) => (
  <div className="card">
    <div className="card-header">
      <h1>{userId}</h1>
      <h1>{title}</h1>
    </div>
    <div className="card-body">
      <p>
        {body}
      </p>
      <button className="btn" type="button">Read more</button>
    </div>
  </div>
);

export default Card;
