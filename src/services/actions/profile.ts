import { IFormEntryData } from './../../hocs/useForm';
import {
  logoutRequest,
  getUserRequest,
  updateUserRequest,
  refreshTokenRequest
} from "../../utils/api";
import {
  EDIT_PROFILE_FORM_SUBMIT,
  EDIT_PROFILE_FORM_SUCCESS,
  EDIT_PROFILE_FORM_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../constants';
import { AppThunk } from "../types";
import { TProfileForm, TUserData } from "../../types";

export interface IEditProfileAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUBMIT;
}

export interface IEditProfileSuccessAction {
  readonly type: typeof EDIT_PROFILE_FORM_SUCCESS;
  readonly user: TUserData;
}

export interface IEditProfileFailedAction {
  readonly type: typeof EDIT_PROFILE_FORM_ERROR;
  readonly message: string;
}

export interface IGetUserAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUserData;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_ERROR;
  readonly message: string;
}

export interface IRefreshTokenAction {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccessAction {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
}

export interface IRefreshTokenFailedAction {
  readonly type: typeof REFRESH_TOKEN_ERROR;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_ERROR;
}

export type TProfileActions =
  | IEditProfileAction
  | IEditProfileSuccessAction
  | IEditProfileFailedAction
  | IGetUserAction
  | IGetUserSuccessAction
  | IGetUserFailedAction
  | IRefreshTokenAction
  | IRefreshTokenSuccessAction
  | IRefreshTokenFailedAction
  | ILogoutAction
  | ILogoutSuccessAction
  | ILogoutFailedAction;

export const editProfileAction = (): IEditProfileAction => ({
  type: EDIT_PROFILE_FORM_SUBMIT,
});

export const editProfileSuccessAction = (user: TUserData): IEditProfileSuccessAction => ({
  type: EDIT_PROFILE_FORM_SUCCESS,
  user,
});

export const editProfileFailedAction = (message: string): IEditProfileFailedAction => ({
  type: EDIT_PROFILE_FORM_ERROR,
  message,
});

export const editProfile = (form: TProfileForm): AppThunk => {
    return (dispatch) => {
    dispatch(editProfileAction());
    updateUserRequest(form)
      .then((data) => {
        dispatch(editProfileSuccessAction(data.user));
      })
      .catch((err) => {
        if (err.message === "jwt expired") {
          dispatch(refreshToken());
        } else {
          dispatch(editProfileFailedAction(err.message));
        }
      });
    }
}

export const getUserAction = (): IGetUserAction => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccessAction = (user: TUserData): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailedAction = (message: string): IGetUserFailedAction => ({
  type: GET_USER_ERROR,
  message,
});

export const getUser = (): AppThunk =>  {
    return (dispatch) => {
    dispatch(getUserAction());
    getUserRequest()
      .then((data) => {
        dispatch(getUserSuccessAction(data.user));
      })
      .catch((err) => {
        if (err.message === "invalid token") {
          dispatch(refreshToken());
        } else {
          dispatch(getUserFailedAction(err.message));
          console.log(err);
        }
      });
    }
}


export const refreshTokenAction = (): IRefreshTokenAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccessAction = (): IRefreshTokenSuccessAction => ({
  type: REFRESH_TOKEN_SUCCESS,
});

export const refreshTokenFailedAction = (): IRefreshTokenFailedAction => ({
  type: REFRESH_TOKEN_ERROR,
});

export const refreshToken = ():AppThunk => {
  return (dispatch) => {
    dispatch(refreshTokenAction());
    refreshTokenRequest()
      .then((data) => {
        dispatch(refreshTokenSuccessAction());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
      })
      .catch((err) => {
        console.error('Failed to refresh token:', err);
        dispatch(refreshTokenFailedAction());
        console.log(err);
      });
  }
}

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailedAction = (): ILogoutFailedAction => ({
  type: LOGOUT_ERROR,
});

export const logout = (): AppThunk => {
  return (dispatch) => {
    dispatch(logoutAction());
    logoutRequest()
      .then(() => {
        dispatch(logoutSuccessAction());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .catch((err) => {
        dispatch(logoutFailedAction());
        console.log(err);
      });
  };
}
