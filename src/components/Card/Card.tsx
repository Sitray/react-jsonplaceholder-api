import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCardFromArray } from '../../store/data/dataAction';

import './Card.css';

interface Props {
    userId: number,
    title: string,
    id: number,
    body: string,
}

const Card = ({
  userId, id, title, body,
}: Props) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const handleRemove = (id:number) => {
    dispatch(removeCardFromArray(id));
  };

  return (
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
};

export default Card;

// export default Card;
