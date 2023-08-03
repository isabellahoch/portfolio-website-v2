import { type Project } from '../types';

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

const portfolioReducer = (action: any, state = initialState): PortfolioState => {
  switch (action.type) {
    case 'FETCH_PROJECTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_PROJECTS_SUCCESS':
      return {
        ...state,
        loading: false,
        projects: action.payload,
        error: null,
      };
    case 'FETCH_PROJECTS_FAILURE':
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
