import { combineReducers } from 'redux';
import portfolioReducer from './portfolio';
import infoReducer from './info';
import { type Portfolio, type Info } from '../types';

export interface RootState {
  portfolio: Portfolio
  info: Info
}

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  info: infoReducer,
});

export default rootReducer;
