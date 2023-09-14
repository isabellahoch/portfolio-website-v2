import { combineReducers } from 'redux';
import portfolioReducer from './portfolio';
import infoReducer from './info';
import themeReducer from './theme';
import { type Portfolio, type Info, type Theme } from '../types';

export interface RootState {
  portfolio: Portfolio
  info: Info
  theme: Theme
}

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  info: infoReducer,
  theme: themeReducer,
});

export default rootReducer;
