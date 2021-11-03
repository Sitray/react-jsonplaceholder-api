import React from 'react';

import './Card.css';

interface Props {
    userId: number,
    title: string,
    id: number,
    body: string,
}

const handleRemove = (id: number) => {
  console.log(id);
};

const Card = ({
  userId, id, title, body,
}: Props) => (
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
      <button className="btn" type="button" onClick={() => handleRemove(id)}>Remove</button>

    </div>
  </div>
);

export default Card;

// export default Card;
