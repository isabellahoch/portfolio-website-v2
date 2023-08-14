/* eslint-disable max-len */
import { type Action } from 'redux';
import { type ThunkAction } from 'redux-thunk';
import { type RootState } from '../reducers';
import { FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS, FETCH_ABOUT_FAILURE } from '../types/infoActions';

// Define action interfaces
interface FetchAboutRequestAction extends Action<typeof FETCH_ABOUT_REQUEST> {}
interface FetchAboutSuccessAction extends Action<typeof FETCH_ABOUT_SUCCESS> {
  payload: string
}
interface FetchAboutFailureAction extends Action<typeof FETCH_ABOUT_FAILURE> {
  payload: string
}

export type InfoAction = FetchAboutRequestAction | FetchAboutSuccessAction | FetchAboutFailureAction;

// Action creators
export const fetchAboutRequest = (): FetchAboutRequestAction => ({
  type: FETCH_ABOUT_REQUEST,
});

export const fetchAboutSuccess = (about: string): FetchAboutSuccessAction => ({
  type: FETCH_ABOUT_SUCCESS,
  payload: about,
});

export const fetchAboutFailure = (error: string): FetchAboutFailureAction => ({
  type: FETCH_ABOUT_FAILURE,
  payload: error,
});

const API_KEY = process.env.REACT_APP_API_KEY != null ? process.env.REACT_APP_API_KEY : '';
const API_URL = process.env.REACT_APP_API_URL != null ? process.env.REACT_APP_API_URL : '';

// Async action creator (Thunk)
export const fetchAbout = (): ThunkAction<void, RootState, unknown, InfoAction> => async (dispatch) => {
  dispatch(fetchAboutRequest());

  try {
    const response = await fetch(`${API_URL}/info/about`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();

    dispatch(fetchAboutSuccess(data));
  } catch (error) {
    dispatch(fetchAboutFailure('Error fetching about.'));
  }
};
