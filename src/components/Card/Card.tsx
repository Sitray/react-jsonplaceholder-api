import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { modifyDataFromArray, removeCardFromArray } from '../../store/data/dataAction';
import { Actions } from '../../store/models/actions';

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
  const dispatch:Dispatch<Actions> = useDispatch();

  const [edition, setEdition] = useState<boolean>(true);
  const [newText, setNewText] = useState<string>(body);
  const [style, setStyle] = useState<string>('textarea');

  // eslint-disable-next-line no-shadow
  const handleRemove = (id:number) => {
    dispatch(removeCardFromArray(id));
  };

  const enableEditing = () => {
    setEdition(!edition);
    setStyle(edition ? 'textarea-open' : 'textarea');
  };

  // eslint-disable-next-line no-shadow
  function handleSave(id: number) {
    dispatch(modifyDataFromArray(id, newText));
    setStyle('textarea');
  }

  return (
    <div className="card">
      <div className="card-header">
        <h1>
          {' '}
          usuario:
          {userId}
        </h1>
        <br />
        <h1>
          {' '}
          título:
          {title}
        </h1>
      </div>
      <div className="card-body">
        <textarea name="body" cols={30} rows={10} value={newText} disabled={edition} onChange={(e) => setNewText(e.target.value)} className={style} />
        <div className="button-container">
          <button className="btn" type="button" onClick={enableEditing}>Edit</button>
          <button className="btn" type="button" onClick={() => handleSave(id)}>Save</button>
          <button className="btn" type="button" onClick={() => handleRemove(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// export default Card;
