/* eslint-disable @typescript-eslint/default-param-last */
import { SET_THEME } from '../actions/themeActions';

export interface ThemeState {
  currentTheme: string | null
}

const initialState: ThemeState = {
  currentTheme: 'DARK', // Default theme
};

const themeReducer = (state = initialState, action: any): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
