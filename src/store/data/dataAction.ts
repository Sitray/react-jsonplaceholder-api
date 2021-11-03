import { Dispatch } from 'redux';

import { Actions } from '../models/actions';

import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, REMOVE_DATA } from './models/actions';
import { Data } from './models/Data';

const requestData = ():Actions => ({
  type: FETCH_DATA_REQUEST,
  loading: true,
  data: [],
  error: '',
});

const gettingData = (data: Data[]):Actions => ({
  type: FETCH_DATA_SUCCESS,
  loading: false,
  data,
  error: '',
});

export const removeCardFromArray = (id: number):Actions => ({
  type: REMOVE_DATA,
  id,
});

// const invalitData = ():Actions => ({
//   type: FETCH_DATA_ERROR,
//   loading: false,
//   data: [],
//   error: 'No hay datos disponibles',
// });

// eslint-disable-next-line import/prefer-default-export
export const getAllRequestData = () => (dispatch:Dispatch<Actions>) => {
  dispatch(requestData());
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => dispatch(gettingData(data)));
};
