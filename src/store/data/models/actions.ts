import { Data } from './Data';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERRORR';
export const REMOVE_DATA = 'REMOVE_DATA';
export const ADD_NEW_DATA = 'ADD_NEW_DATA';

interface DataAsync {
    loading: boolean,
    data: Data[],
    error: string,
    id?:number
}

interface DataToRemove{
    id: number,
    data?: Data[]
}

interface ModifyData{
    id: number,
    newData: string
}

interface FetchDataRequest extends DataAsync {
    type: typeof FETCH_DATA_REQUEST
}

interface FetchDataSuccess extends DataAsync {
    type: typeof FETCH_DATA_SUCCESS
}

interface FetchDataError extends DataAsync {
    type: typeof FETCH_DATA_ERROR
}

interface RemoveData extends DataToRemove {
    type: typeof REMOVE_DATA;
}

interface AddNewData extends ModifyData {
    type: typeof ADD_NEW_DATA;
}

export type DataActions = FetchDataRequest | FetchDataSuccess |FetchDataError | RemoveData | AddNewData
