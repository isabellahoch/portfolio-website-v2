/* eslint-disable @typescript-eslint/default-param-last */
import {
  FETCH_ABOUT_REQUEST, FETCH_ABOUT_SUCCESS, FETCH_ABOUT_FAILURE,
  FETCH_BADGES_REQUEST, FETCH_BADGES_SUCCESS, FETCH_BADGES_FAILURE,
} from '../types/infoActions';

type BadgeEntry = Record<string, string>;

export interface InfoState {
  loading: boolean
  about: string | null
  badges: Record<string, BadgeEntry> | object
  error: string | null
}

const initialState: InfoState = {
  loading: false,
  about: null,
  badges: {},
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
    case FETCH_BADGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BADGES_SUCCESS:
      return {
        ...state,
        loading: false,
        badges: action.payload,
        error: null,
      };
    case FETCH_BADGES_FAILURE:
      return {
        ...state,
        loading: false,
        badges: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default infoReducer;
