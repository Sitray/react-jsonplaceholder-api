import {
  DataActions, FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, REMOVE_DATA, ADD_NEW_DATA,
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

    case REMOVE_DATA:
      // eslint-disable-next-line no-case-declarations
      const updateData: Data[] = state.userData.filter(
        (data) => data.id !== action.id,
      );
      return {
        ...state,
        userData: updateData,
      };

    case ADD_NEW_DATA:
      // eslint-disable-next-line no-case-declarations
      const newArray: Data[] = [...state.userData];
      newArray[action.id].body = action.newData;

      return {
        ...state,
        userData: newArray,
      };
    default: return state;
  }
};

export default dataReducer;
