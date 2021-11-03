import {
  DataActions, FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS,
} from './models/actions';

import { Data } from './models/Data';

interface DataState {
    loading: boolean,
    userData: Data[],
    error:'',
}

const initialState: DataState = {
  loading: false,
  userData: [],
  error: '',
};

export const dataReducer = (state = initialState, action: DataActions): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        loading: true,
        userData: [],
        error: '',
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        userData: action.data,
        error: '',
      };
    case FETCH_DATA_ERROR:
      return {
        loading: false,
        userData: [],
        error: '',
      };

    default: return state;
  }
};

export default dataReducer;