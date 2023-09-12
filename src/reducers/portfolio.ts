/* eslint-disable @typescript-eslint/default-param-last */
import { type Project } from '../types';
import { FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS } from '../types/portfolioActions';
import { type PortfolioAction } from '../actions/portfolioActions';

export interface PortfolioState {
  loading: boolean
  projects: Project[]
  error: string | null
}

const initialState: PortfolioState = {
  loading: false,
  projects: [],
  error: null,
};

// eslint-disable-next-line max-len
const portfolioReducer = (state: PortfolioState = initialState, action: PortfolioAction): PortfolioState => {
  if (action === undefined) {
    return state;
  }
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
        error: null,
      };
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        projects: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;
