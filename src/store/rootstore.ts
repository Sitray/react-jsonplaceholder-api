import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import dataReducer from './data/dataReducer';
import { Actions } from './models/actions';

const logger = createLogger();

export const rootReducer = combineReducers({ dataReducer });

export type AppState = ReturnType<typeof rootReducer>;
/* eslint-disable no-underscore-dangle */
export const store = createStore<AppState, Actions, {}, {}>(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, Actions>, logger),
  ),

);
