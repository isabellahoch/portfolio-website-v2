/* eslint-disable max-len */
import { type Action } from 'redux';
import { type ThunkAction } from 'redux-thunk';
import { type RootState } from '../reducers';
import { type Project } from '../types';
import { FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE } from '../types/portfolioActions';

interface FetchProjectsRequestAction extends Action<typeof FETCH_PROJECTS_REQUEST> {}
interface FetchProjectsSuccessAction extends Action<typeof FETCH_PROJECTS_SUCCESS> {
  payload: Project[]
}
interface FetchProjectsFailureAction extends Action<typeof FETCH_PROJECTS_FAILURE> {
  payload: string
}

export type PortfolioAction = FetchProjectsRequestAction | FetchProjectsSuccessAction | FetchProjectsFailureAction;

export const fetchProjectsRequest = (): FetchProjectsRequestAction => ({
  type: FETCH_PROJECTS_REQUEST,
});

export const fetchProjectsSuccess = (projects: Project[]): FetchProjectsSuccessAction => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects,
});

export const fetchProjectsFailure = (error: string): FetchProjectsFailureAction => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: error,
});

const API_KEY = process.env.REACT_APP_API_KEY != null ? process.env.REACT_APP_API_KEY : '';
const API_URL = process.env.REACT_APP_API_URL != null ? process.env.REACT_APP_API_URL : '';

export const fetchProjects = (): ThunkAction<void, RootState, unknown, PortfolioAction> => async (dispatch) => {
  console.log('here here here');
  dispatch(fetchProjectsRequest());

  console.log(`${API_URL}/projects`);

  try {
    const response = await fetch(`${API_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    console.log(data);

    dispatch(fetchProjectsSuccess(data));
  } catch (error) {
    dispatch(fetchProjectsFailure('Error fetching projects.'));
  }
};

// import { AnyAction, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
// import { fetchProjects } from './path-to-portfolio-actions'; // Update with the correct path to your portfolio actions

// export const fetchProjectsWrapper = (): AnyAction => (dispatch: Dispatch) => {
//   // Dispatch the Thunk action
//   dispatch(fetchProjects());
// };
