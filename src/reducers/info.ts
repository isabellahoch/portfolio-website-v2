/* eslint-disable @typescript-eslint/default-param-last */
import { FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS, FETCH_ABOUT_FAILURE } from '../types/infoActions';

export interface InfoState {
  loading: boolean
  about: string | null
  error: string | null
}

const initialState: InfoState = {
  loading: false,
  about: null,
  error: null,
};

const infoReducer = (state = initialState, action: any): InfoState => {
  if (action === undefined) {
    return state;
  }
  switch (action.type) {
    case FETCH_ABOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        about: action.payload,
        error: null,
      };
    case FETCH_ABOUT_FAILURE:
      return {
        ...state,
        loading: false,
        about: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default infoReducer;
