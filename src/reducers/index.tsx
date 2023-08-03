import { combineReducers } from 'redux';
import portfolioReducer, { type PortfolioState } from './portfolio';

export interface RootState {
  portfolio: PortfolioState
}

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export default rootReducer;
