import { type Action } from 'redux';
import { type ThunkAction } from 'redux-thunk';
import { type RootState } from '../reducers';

export const SET_THEME = 'SET_THEME';

interface SetThemeAction extends Action<typeof SET_THEME> {
  payload: string
}

export type ThemeAction = SetThemeAction;

export const setTheme = (theme: string): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
});

export const changeTheme = (
  theme: string,
): ThunkAction<void, RootState, unknown, ThemeAction> => (dispatch) => {
  dispatch(setTheme(theme));
};
