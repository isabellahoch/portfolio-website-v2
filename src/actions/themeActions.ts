import { type Action } from 'redux';
import { type ThunkAction } from 'redux-thunk';
import { type RootState } from '../reducers';

// Define action types
export const SET_THEME = 'SET_THEME';

// Define action interfaces
interface SetThemeAction extends Action<typeof SET_THEME> {
  payload: string // The theme name
}

export type ThemeAction = SetThemeAction;

// Action creators
export const setTheme = (theme: string): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});

// Thunk action creator for changing the theme
export const changeTheme = (
  theme: string,
): ThunkAction<void, RootState, unknown, ThemeAction> => (dispatch) => {
  // You can perform any additional logic here before dispatching the action
  dispatch(setTheme(theme));
};
